import React from 'react';
import Select from 'react-select';
import './App.css';
import Title from './components/Title/Title.js';
import './components/Title/Title.css'
import TypeSelect1 from './components/TypeSelect1/TypeSelect1';
import TypeSelect2 from './components/TypeSelect2/TypeSelect2';
import './components/TypeSelect1/TypeSelect1.css'
import './components/TypeSelect2/TypeSelect2.css'
import Amount from './components/AmountInput/AmountInput';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className="Title">
          <Title title={'Currency Converter'} />
        </div>
        <div className='TypeSelect'>
          <div className='TypeSelect1'>
            <label style={{ fontSize: 20 }}>
              From:
              <TypeSelect1 />
            </label>
          </div>

          <div className='TypeSelect2'>
            <label style={{ fontSize: 20 }}>
              To:
              <TypeSelect2 />
            </label>
          </div>
        </div>

        <div className='AmountInput' >
          <Amount />
        </div>
      </div>
    )
  }
}

export default App;