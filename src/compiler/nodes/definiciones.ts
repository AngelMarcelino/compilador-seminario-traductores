import { setupMaster } from "cluster";
import { Definicion } from "./definicion";
import { Node } from "./nodo";

const DEFINICION_INDEX = 0;
const DEFINICIONES_INDEX = 2;

export class Definiciones extends Node {
  definicion: Definicion;
  siguiente: Definiciones | undefined;
  constructor(numberOfRule: number, reducedData: any[]) {
    super(numberOfRule);
    this.definicion = reducedData[DEFINICION_INDEX];
    if (typeof (reducedData[DEFINICIONES_INDEX]) !== "number") {
      this.siguiente = reducedData[DEFINICIONES_INDEX];
    }
  }
}
