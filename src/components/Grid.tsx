import React from 'react';
import { group } from 'console';
import { Token } from '../models/token';

export interface GridProps {
  tokens: Token[];
}

const cols = 5;

export default function Grid(props: GridProps) {
  return (
    <div className="grid-container">
      <table style={{borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th>Token</th>
            <th>Nombre</th>
            <th>Lexema</th>
          </tr>
        </thead>
        <tbody>
          {props.tokens.map(r => <tr style={{}}>
            <td>{r.tokenId}</td>
            <td>{r.name}</td>
            <td>{r.lexeme}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

