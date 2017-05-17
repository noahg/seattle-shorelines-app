/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/* Allow geojson file imports*/
/* https://hackernoon.com/import-json-into-typescript-8d465beded79 */
declare module "*.json" {
  const value: any;
  export default value;
}
