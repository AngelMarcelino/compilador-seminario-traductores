import { Token } from "../../models/token";
import { Argumentos } from "./argumentos";
import { Node } from "./nodo";

const ID_INDEX = 0;
const ARGUMENTOS_INDEX = 4;

export class LlamadaFunc extends Node {
  id: Token;
  argumentos: Argumentos;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.id = reducedData[ID_INDEX];
    this.argumentos = reducedData[ARGUMENTOS_INDEX];
  }
}
