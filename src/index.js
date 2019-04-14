import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  foo = () => <div>{"Hello world"}</div>;

  render() {
    return this.foo();
  }
}

ReactDOM.render(<App />, document.getElementById('app'));