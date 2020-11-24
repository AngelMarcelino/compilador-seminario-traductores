import { Node } from "./nodo";
import { Sentencias } from "./sentencias";

const SENTENCIAS_INDEX = 2;

export class Bloque extends Node {
  sentencias: Sentencias;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.sentencias = reducedData[SENTENCIAS_INDEX];
  }
}