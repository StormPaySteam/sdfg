import { COUNTRIES } from './countries.js';
import { GEO_SOURCES } from './countries.js';

export const provinces = [];
export const byId = new Map();

const slug = (s) => String(s || 'region')
  .normalize('NFKD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

function featureName(feature) {
  const p = feature.properties || {};
  return p.shapeName || p.shapeName_en || p.name || p.NAME_1 || p.NAME || p.shapeNameAlt || 'Регион';
}

async function fetchJson(url, label) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${label}: HTTP ${response.status} при загрузке ${url}`);
  const text = await response.text();
  // GitHub LFS pointer files are plain text, not GeoJSON.
  if (text.trimStart().startsWith('version https://git-lfs.github.com/spec/v1')) {
    throw new Error(`${label}: сервер вернул указатель Git LFS вместо GeoJSON. Используйте API geoBoundaries.`);
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`${label}: ответ сервера не является JSON. Проверьте URL геоданных: ${url}. Начало ответа: ${text.slice(0, 90)}`);
  }
}

async function loadCountryGeoJSON(code) {
  const source = GEO_SOURCES[code];
  if (!source) throw new Error(`Не указан источник геоданных для ${code}.`);

  // Preferred source format: geoBoundaries API metadata endpoint.
  if (source.includes('geoboundaries.org/api/')) {
    const metadata = await fetchJson(source, `Метаданные ${COUNTRIES[code].name}`);
    const geometryUrl = metadata.simplifiedGeometryGeoJSON || metadata.gjDownloadURL;
    if (!geometryUrl || typeof geometryUrl !== 'string') {
      throw new Error(`geoBoundaries не вернул ссылку на GeoJSON для ${COUNTRIES[code].name}.`);
    }
    const data = await fetchJson(geometryUrl, `Геометрия ${COUNTRIES[code].name}`);
    return data;
  }

  // Supports direct GeoJSON sources too, with a helpful error if the URL returns HTML/LFS text.
  return fetchJson(source, `Геометрия ${COUNTRIES[code].name}`);
}

export async function loadProvinces(onProgress = () => {}) {
  provinces.length = 0;
  byId.clear();

  const results = await Promise.all(Object.keys(GEO_SOURCES).map(async (code) => {
    onProgress(`Загружаем границы: ${COUNTRIES[code].name}…`);
    const data = await loadCountryGeoJSON(code);
    if (!data || !Array.isArray(data.features) || !data.features.length) {
      throw new Error(`Источник не содержит GeoJSON FeatureCollection с объектами для ${code}.`);
    }
    return { code, data };
  }));

  for (const { code, data } of results) {
    const seen = new Map();
    for (const feature of data.features) {
      if (!feature.geometry) continue;
      const name = featureName(feature);
      const base = `${code}-${slug(name) || 'region'}`;
      const n = (seen.get(base) || 0) + 1;
      seen.set(base, n);
      const id = n === 1 ? base : `${base}-${n}`;
      const province = {
        id,
        name,
        countryId: code,
        adminLevel: 1,
        geometry: feature.geometry,
        sourceProperties: feature.properties || {},
        owner: code,
        controller: code,
        population: null,
        economy: null,
        infrastructure: null,
        cities: [],
        buildings: [],
        armies: []
      };
      provinces.push(province);
      byId.set(id, province);
    }
  }

  if (!provinces.length) throw new Error('Географические источники загрузились, но провинций не найдено.');
  return provinces;
}

export function provinceSearch(query) {
  const term = query.trim().toLocaleLowerCase('ru');
  if (!term) return [];
  return provinces
    .filter(p => p.name.toLocaleLowerCase('ru').includes(term) || p.id.toLowerCase().includes(term))
    .slice(0, 30);
}

export function featureCollection() {
  return {
    type: 'FeatureCollection',
    features: provinces.map(p => ({
      type: 'Feature',
      id: p.id,
      properties: { id: p.id, name: p.name, countryId: p.countryId },
      geometry: p.geometry
    }))
  };
}
