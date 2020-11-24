import { DefLocal } from "./def-local";
import { Node } from "./nodo";

const DEF_LOCAL_INDEX = 0;
const SIGUIENTE_INDEX = 2;

export class DefLocales extends Node {
  defLocal: DefLocal;
  siguiente: DefLocales;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.defLocal = reducedData[DEF_LOCAL_INDEX];
    this.siguiente = reducedData[SIGUIENTE_INDEX];
  }
}