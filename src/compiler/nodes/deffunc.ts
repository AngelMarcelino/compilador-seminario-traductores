import { Token } from "../../models/token";
import { BloqFunc } from "./bloqfunc";
import { Node } from "./nodo";
import { Parametros } from "./parametros";

const TIPO_INDEX = 0;
const ID_INDEX = 2;
const PARAMETROS_INDEX = 6;
const BLOQUE_FUNC_INDEX = 10;

export class DefFunc extends Node {
  tipo: Token;
  id: Token;
  parametros: Parametros;
  bloque: BloqFunc;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.tipo = reducedData[TIPO_INDEX];
    this.id = reducedData[ID_INDEX];
    this.parametros = reducedData[PARAMETROS_INDEX];
    this.bloque = reducedData[BLOQUE_FUNC_INDEX];
  }
}
