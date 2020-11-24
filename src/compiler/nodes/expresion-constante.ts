import { Node } from "./nodo";

const CONSTANTE_INDEX = 0;

export class ExpresionConstante extends Node {
  constante: number;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.constante = reducedData[CONSTANTE_INDEX];
  }
}
