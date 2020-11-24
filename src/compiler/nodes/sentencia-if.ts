import { Else } from './else';
import { Expresion } from './expresion';
import { Node } from './nodo';
import { Sentencia } from './sentencia';
import { SentenciaBloque } from './sentencia-bloque';
const CONDICION_INDEX = 4;
const SENTENCIA_INDEX = 8;
const ELSE_INDEX = 10;
export class SentenciaIf extends Sentencia {
  condition: Expresion;
  sentencia: SentenciaBloque;
  else: Else;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.condition = reducedData[CONDICION_INDEX];
    this.sentencia = reducedData[SENTENCIA_INDEX];
    this.else = reducedData[ELSE_INDEX];
  }
}
