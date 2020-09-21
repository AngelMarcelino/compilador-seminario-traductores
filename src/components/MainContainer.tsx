import React from 'react';
import { AnalyzeLexical } from '../compiler/lexical';
import Grid from './Grid';

interface MainComponentState {
  copy: string;
  input: string;
  parsed: string[];
} 

export default class MainComponent extends React.Component<any, MainComponentState> {
  constructor(props: any) {
    super(props);
    this.process = this.process.bind(this);
    this.state = {
      copy: '',
      input: '',
      parsed: []
    };
  }

  private process() {
    AnalyzeLexical(this.state.input);
    this.setState({
      parsed: this.state.input.trim().split(' ').flatMap(e => e.split('\n').flatMap(se => se.split('\t'))).filter(e => !!e),
      copy: this.state.input
    });
  }

  private setValue(element: React.ChangeEvent<HTMLTextAreaElement>) {
    const newState: any = { [element.target.name]: element.target.value };
    console.log(newState);
    this.setState(
      newState
    );
  }

  render() {
    return (
      <div>
        <div>
          <div style={{float: 'left'}}>
            <textarea style={{margin: 0, width: 500, height: 428}} name="input" value={this.state.input} onChange={(event) => this.setValue(event)}></textarea>
          </div>
          <div style={{float: 'left'}}>
            <button type="button" onClick={this.process}>Procesar</button>
          </div>
          <div style={{float: 'left'}}>
            <textarea style={{margin: 0, width: 500, height: 428}} name="copy" value={this.state.copy} readOnly></textarea>
          </div>
        </div>
        <div style={{clear: 'both'}}>
          <Grid tokens={this.state.parsed}/>
        </div>
      </div>
    )
  }
}
