import { Token } from '../../models/token';
import { Expresion } from './expresion';
import { Node } from './nodo';
import { Sentencia } from './sentencia';

const ID_INDEX = 0;
const EXPRESION_INDEX = 4;

export class SentenciaAsignacion extends Sentencia {
  id: Token;
  expresion: Expresion;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.id = reducedData[ID_INDEX];
    this.expresion = reducedData[EXPRESION_INDEX];
  }
}
