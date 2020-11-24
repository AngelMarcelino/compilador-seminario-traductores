import { reduceRight } from "lodash";
import { Definiciones } from "./definiciones";
import { Node } from "./nodo";

const DEFINICIONES_INDEX = 0;

export class Programa extends Node {
  definiciones: Definiciones | null;
  constructor(numberOfRule: number, reducedData: any[]) {
    super(numberOfRule);
    this.definiciones = reducedData[DEFINICIONES_INDEX];
  }
}