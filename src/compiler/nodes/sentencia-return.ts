import { SymbolTable } from '../symbol-table';
import { Expresion } from './expresion';
import { Node } from './nodo';
import { Sentencia } from './sentencia';

const EXPRESION_INDEX = 2;

export class SentenciaReturn extends Sentencia {
  expresion: Expresion;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.expresion = reducedData[EXPRESION_INDEX];
  }

  validaSemantica(parentScope: SymbolTable): boolean {
    return this.expresion.validaSemantica(parentScope) != undefined;
  }
}
