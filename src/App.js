import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: 0,
      elementsInRow: 4,
      results: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    };
    ArrowKeysReact.config({
      left: () => {
        if (this.state.cursor > 0) {
          this.setState( prevState => ({
            cursor: prevState.cursor - 1
          }))
        }
      },
      right: () => {
        if (this.state.cursor < this.state.results.length - 1) {
          this.setState( prevState => ({
            cursor: prevState.cursor + 1
          }))
        }
      },
      up: () => {
        if (this.state.cursor >= this.state.elementsInRow) {
          this.setState( prevState => ({
            cursor: prevState.cursor - this.state.elementsInRow
          }))
        }
      },
      down: () => {
        if (this.state.cursor <= this.state.elementsInRow) {
          this.setState( prevState => ({
            cursor: prevState.cursor + this.state.elementsInRow
          }))
        }
      }
    });
  }

  componentDidMount() {
    this.refs.focusedDiv.focus();
  }

  render() {
    return (
      <div className="container">
        <div className="row pt-4" {...ArrowKeysReact.events} tabIndex="-1" ref="focusedDiv">
          {
            this.state.results.map((item, i) => (
              <div key={item} className="col-sm-3 text-center">
                <div className={this.state.cursor === i ? 'active' : null} ref={'f' + i} onKeyPress={this.handlePressEnter}>
                  { item }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
