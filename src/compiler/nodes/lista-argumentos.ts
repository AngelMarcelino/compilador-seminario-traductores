import { Expression } from "typescript";
import { Node } from "./nodo";

const EXPRESION_INDEX = 2;
const LISTA_INDEX = 4;

export class ListaArgumentos extends Node {
  expresion: Expression;
  siguiente: ListaArgumentos;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.expresion = reducedData[EXPRESION_INDEX];
    this.siguiente = reducedData[LISTA_INDEX];
  }
}
