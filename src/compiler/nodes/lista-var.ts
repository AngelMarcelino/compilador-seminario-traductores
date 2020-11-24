import { Token } from "../../models/token";
import { Node } from "./nodo";

const ID_INDEX = 2;
const LISTA_VAR_INDEX = 4;

export class ListaVar extends Node {
  id: Token;
  siguiente: ListaVar | undefined;
  constructor(numberOfRule: number, reducedData: any[]) {
    super(numberOfRule);
    this.id = reducedData[ID_INDEX];
    this.siguiente = reducedData[LISTA_VAR_INDEX];
  }
}