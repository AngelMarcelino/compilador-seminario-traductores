import { Token } from "../../models/token";
import { Node } from "./nodo";

const ID_INDEX = 0;

export class ExpresionId extends Node {
  id: Token;
  constructor(ruleNumber: number, reducedData: any[]) {
    super(ruleNumber);
    this.id = reducedData[ID_INDEX];
  }
}
