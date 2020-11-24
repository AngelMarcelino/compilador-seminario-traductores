import { Node } from "./nodo";
import { SentenciaBloque } from "./sentencia-bloque";

const BLOQUE_ELSE_INDEX = 2;

export class Else extends Node {
  sentenciaBloque: SentenciaBloque;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.sentenciaBloque = reducedData[BLOQUE_ELSE_INDEX];
  }
}
