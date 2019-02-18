import * as React from 'react';


import Hello from './Hello'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Hello name={'jake'}  />
      </div>
    );
  }
}

export default App;
