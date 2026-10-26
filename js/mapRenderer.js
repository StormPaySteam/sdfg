import { COUNTRIES } from './countries.js';
const NS = 'http://www.w3.org/2000/svg';
export class MapRenderer {
  constructor(svg, layer, labels) { this.svg=svg; this.layer=layer; this.labels=labels; this.paths=new Map(); this.provinces=[]; this.view={x:0,y:0,scale:1}; this.mode='political'; }
  render(provinces) {
    this.provinces=provinces;
    const pts=[];
    for(const p of provinces) for(const poly of polygons(p.geometry)) for(const ring of poly) for(const pt of ring) if(Number.isFinite(pt[0])&&Number.isFinite(pt[1])) pts.push(pt);
    if(!pts.length) throw new Error('Встроенная карта не содержит координат.');
    const minX=Math.min(...pts.map(p=>p[0])), maxX=Math.max(...pts.map(p=>p[0]));
    const minY=Math.min(...pts.map(p=>p[1])), maxY=Math.max(...pts.map(p=>p[1]));
    const W=1200,H=800,pad=34, scale=Math.min((W-2*pad)/(maxX-minX),(H-2*pad)/(maxY-minY));
    const ox=(W-(maxX-minX)*scale)/2, oy=(H-(maxY-minY)*scale)/2;
    this.project=([x,y])=>[ox+(x-minX)*scale,oy+(y-minY)*scale];
    this.layer.replaceChildren(); this.labels.replaceChildren(); this.paths.clear();
    for(const p of provinces){const path=document.createElementNS(NS,'path');path.setAttribute('d',geometryPath(p.geometry,this.project));path.setAttribute('class','province');path.dataset.id=p.id;path.dataset.country=p.countryId;path.setAttribute('fill',COUNTRIES[p.owner]?.color||'#526f9e');path.setAttribute('fill-rule','evenodd');path.setAttribute('stroke-linejoin','round');path.setAttribute('stroke','#172333');path.setAttribute('stroke-width','1.4');this.layer.append(path);this.paths.set(p.id,path);}
    this.addCountryLabels(); this.setView({x:0,y:0,scale:1});
  }
  addCountryLabels(){const labels=[['RUS','РОССИЯ',850,240],['UKR','УКРАИНА',340,475],['BLR','БЕЛАРУСЬ',400,330]];for(const [id,name,x,y] of labels){const [px,py]=this.project([x,y]);const t=document.createElementNS(NS,'text');t.setAttribute('x',px);t.setAttribute('y',py);t.setAttribute('class','country-label');t.setAttribute('text-anchor','middle');t.textContent=name;this.labels.append(t);}}
  setView(v){this.view=v;const {x,y,scale}=v;this.layer.setAttribute('transform',`translate(${x} ${y}) scale(${scale})`);this.labels.setAttribute('transform',`translate(${x} ${y}) scale(${scale})`);this.svg.dataset.scale=String(scale);}
  select(id){for(const [key,path] of this.paths)path.classList.toggle('selected',key===id);}
  setMode(mode,owners={},controllers={}){this.mode=mode;for(const p of this.provinces){const path=this.paths.get(p.id);if(!path)continue;let color=COUNTRIES[p.owner]?.color||'#526f9e';if(mode==='control')color=COUNTRIES[controllers[p.id]||p.controller]?.color||'#526f9e';if(mode==='provinces')color='#34465b';if(['infrastructure','economy','resources'].includes(mode))color='#34465b';path.setAttribute('fill',color);path.setAttribute('fill-opacity',mode==='provinces'?.9:1);path.setAttribute('stroke',mode==='provinces'?'#8798aa':'#182332');}}
  centerOn(id){const path=this.paths.get(id);if(!path)return;const box=path.getBBox();const scale=Math.max(1.6,Math.min(5,Math.min(700/Math.max(box.width,1),500/Math.max(box.height,1))));this.setView({x:600-(box.x+box.width/2)*scale,y:400-(box.y+box.height/2)*scale,scale});}
}
function polygons(g){if(!g)return [];if(g.type==='Polygon')return [g.coordinates];if(g.type==='MultiPolygon')return g.coordinates;return [];}
function geometryPath(g,project){return polygons(g).map(poly=>poly.map(ring=>ring.map((pt,i)=>{const [x,y]=project(pt);return `${i?'L':'M'}${x.toFixed(2)},${y.toFixed(2)}`;}).join(' ')+' Z').join(' ')).join(' ');}
