import { Token } from '../../models/token';
import { PrimitiveTypes } from '../primitive-types';
import { ListaParametros } from './lista-parametros';
import { NodeObjectMap } from './node-object-map';
import { Node } from './nodo';

const TYPE_INDEX = 0;
const ID_INDEX = 2;
const NEXT_PARAM_LIST = 4;

export class Parametros extends Node {
  tipo: PrimitiveTypes;
  identifier: Token;
  siguiente: ListaParametros | null;
  constructor(numberOfRule: number, reducedData: any[]) {
    super(numberOfRule);
    this.tipo = reducedData[TYPE_INDEX];
    this.identifier = reducedData[ID_INDEX];
    this.siguiente = reducedData[NEXT_PARAM_LIST];
  }
}
