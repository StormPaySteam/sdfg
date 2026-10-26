
export const COUNTRIES = {
  RUS: {
    id: 'RUS',
    name: 'Россия',
    flag: '🇷🇺',
    color: '#526f9e',
    capital: 'Москва'
  },
  UKR: {
    id: 'UKR',
    name: 'Украина',
    flag: '🇺🇦',
    color: '#c59b48',
    capital: 'Киев'
  },
  BLR: {
    id: 'BLR',
    name: 'Беларусь',
    flag: '🇧🇾',
    color: '#a65d66',
    capital: 'Минск'
  }
};

// API geoBoundaries: метаданные с актуальной ссылкой на GeoJSON.
// Лицензия данных: CC BY 4.0.
export const GEO_SOURCES = {
  RUS: 'https://www.geoboundaries.org/api/current/gbOpen/RUS/ADM1/',
  UKR: 'https://www.geoboundaries.org/api/current/gbOpen/UKR/ADM1/',
  BLR: 'https://www.geoboundaries.org/api/current/gbOpen/BLR/ADM1/'
};
