import { Token } from "../../models/token";
import { ListaVar } from "./lista-var";
import { Node } from "./nodo";

const TYPE_INDEX = 0;
const ID_INDEX = 2;
const LISTAVAR_INDEX = 4; 

export class DefVar extends Node {
  type: Token;
  id: Token;
  listaVar: ListaVar;
  constructor(numberOfRule: number, reducedData: any[]) {
    super(numberOfRule);
    this.type = reducedData[TYPE_INDEX];
    this.id = reducedData[ID_INDEX];
    this.listaVar = reducedData[LISTAVAR_INDEX];
  }
}