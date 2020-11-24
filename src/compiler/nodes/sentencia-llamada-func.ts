import { LlamadaFunc } from './llamada-func';
import { Node } from './nodo';
import { Sentencia } from './sentencia';

const INDEX_LLAMADA = 0

export class SentenciaLlamadaFuncion extends Sentencia {
  llamada: LlamadaFunc;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.llamada = reducedData[INDEX_LLAMADA];
  }
}
