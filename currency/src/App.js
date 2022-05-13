import React from 'react';
import Select from 'react-select';
import './App.css';
import Title from './components/Title.js';
import TypeSelect from './components/TypeSelect';
import Amount from './components/AmountInput';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className="Title">
          <Title />
        </div>

        <div className='TypeSelect'>
          <label style={{fontSize:20}}>
            From:
            <TypeSelect />
          </label>
          
          <label style={{fontSize:20}}>
            To:
            <TypeSelect />
          </label>
          
        </div>

        <div className='AmountInput' >
          <Amount />
        </div>
      </div>
    )
  }
}

export default App;