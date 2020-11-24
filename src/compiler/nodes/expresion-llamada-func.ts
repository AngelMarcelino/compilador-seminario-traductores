import { Expression } from "typescript";
import { LlamadaFunc } from "./llamada-func";
import { Node } from "./nodo";

const LLAMADA_FUNC = 0;

export class ExpresionLlamadaFunc extends Node {
  llamadaFunc: LlamadaFunc;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.llamadaFunc = reducedData[LLAMADA_FUNC];
  }
}
