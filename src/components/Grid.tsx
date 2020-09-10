import React from 'react';
import { group } from 'console';

export interface GridProps {
  tokens: string[];
}

const cols = 5;

export default function Grid(props: GridProps) {
  let groups = [];
  let rowCount = props.tokens.length / cols;
  for (let i = 0; i < rowCount; i+= 1) {
    groups.push(props.tokens.slice(i*cols, (i*cols) + cols));
  }
  console.log(groups);
  return (
    <div className="grid-container">
      <table style={{borderCollapse: 'collapse'}}>
        {groups.map(r => <tr style={{}}>
          {r.map(c => <td style={{marginLeft: 12, border: '1px solid #000', padding: 5}}>{c}</td>)} 
        </tr>)}
      </table>
      
    </div>
  )
}

