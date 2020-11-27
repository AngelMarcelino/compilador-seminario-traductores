import { errors } from "../error-colector";
import { SymbolTable } from "../symbol-table";
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
  validaSemantica(parentScope: SymbolTable) {
    let isValid = true;
    let nodo: DefLocales | undefined = this;
    while(typeof(nodo) !== "number" && nodo != undefined) {
      try {
        isValid = isValid && nodo.defLocal.validaSemantica(parentScope);
      } catch(exception) {
        errors.push(exception.message);
      }
      nodo = this.siguiente;
    }
    return isValid;
  }
}