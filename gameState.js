const KEY='easteurope-strategy-save-v1';
export const initialState=()=>({playerCountry:null,scenarioId:'test-2022',date:'2022-02-24',turn:1,money:1000,selectedProvinceId:null,mapMode:'political',camera:{x:0,y:0,scale:1},owners:{},controllers:{},settings:{}});
export const state=initialState();
export function update(patch){Object.assign(state,patch);return state}
export function save(){try{localStorage.setItem(KEY,JSON.stringify(state));return true}catch(e){return false}}
export function load(){try{const raw=localStorage.getItem(KEY);if(!raw)return null;return JSON.parse(raw)}catch{return null}}
export function clearSave(){try{localStorage.removeItem(KEY)}catch{}}
