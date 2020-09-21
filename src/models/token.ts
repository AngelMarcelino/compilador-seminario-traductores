export interface Token {
  lexeme: string;
  tokenId: number;
  name: string;
}

export function generateToken(name: string, lexeme: string): Token {
  return {
    lexeme,name, tokenId: 0
  }
}
