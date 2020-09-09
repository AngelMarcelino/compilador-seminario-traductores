import React from 'react';
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
  }

  private process() {
    this.setState({
      parsed: this.state.input.trim().split(' ').flatMap(e => e.split('\n').flatMap(se => se.split('\t'))).filter(e => !!e)
    });
  }

  private setValue(element: React.ChangeEvent<HTMLTextAreaElement>) {
    const newState: any = { [element.target.name]: element.target.value };
    this.setState(
      newState
    );
  }

  render() {
    return (
      <div>
        <div>
          <textarea value={this.state.copy} onChange={(event) => this.setValue(event)}></textarea>
        </div>
        <div>
          <button type="button" onClick={this.process}>Procesar</button>
        </div>
        <div>
          <textarea value={this.state.copy} onChange={(value) => this.setValue(value)}></textarea>
        </div>
        <div>
          <Grid tokens={this.state.parsed}/>
        </div>
      </div>
    )
  }
}
