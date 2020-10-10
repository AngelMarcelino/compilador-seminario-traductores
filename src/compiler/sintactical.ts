import { Token } from '../models/token';
import { getQuantityOfElementsByRules } from '../resources/GR2slrRulesId';
import { getFromTableAt } from "../resources/GR2slrTablebien";

export function sintacticAnalysis(tokens: Token[]) {
  let stack: (number | Token)[] = [0];
  let tokenPointer = 0;
  while (true) {
    const token = tokens[tokenPointer];
    let instruction = 0;
    if (instruction = getFromTableAt(getLast(stack), token.tokenId)) {
      if (instruction == -1) {
        return 0;
      }
      if (instruction < 0) {
        let numberOfRule = -(instruction + 1);
        let ruleData = getQuantityOfElementsByRules(numberOfRule);
        let numberOfElementsToDeleteFromStack = ruleData.numberOfItems;
        stack = stack.slice(0, stack.length - numberOfElementsToDeleteFromStack * 2);
        const result = getFromTableAt(getLast(stack), ruleData.colNumber);
        if (result == -1) {
          return 0;
        }
        if (result) {
          stack.push(numberOfRule, result);
        } else {
          console.log('Hay error');
          return -1;
        }
      } else if(instruction > 0) {
        stack.push(token);
        stack.push(instruction);
        tokenPointer ++;
      } else {
        console.log('Hay un error');
        return -1;
      }
    } else {
      console.log('Hay un error');
      return -1;
    }
  }
}

function getLast(arr: any[]) {
  const elem = arr[arr.length - 1];
  return elem;
}
