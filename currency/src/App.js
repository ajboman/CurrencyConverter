import React from 'react';
import './App.css';
import Current from './components/CurrentCurrency';
import Desired from './components/DesiredCurrency';


class App extends React.Component {
  render() {
    return (
      <div className="App-body">
        <div className="Current">
          <Current />
        </div>
        <div className="Desired">
          <Desired />
        </div>
      </div>
    )
  }
}

export default App;