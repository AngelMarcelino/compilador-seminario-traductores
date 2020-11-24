import { Token } from "../../models/token";
import { Node } from "./nodo";

const SENTENCIA_INDEX = 0;

export class SentenciaBloqueSentencia extends Node {
  sentencia: Token;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.sentencia = reducedData[SENTENCIA_INDEX];
  }
}
