import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'cad', label: 'Canadian Dollar' },
    { value: 'usd', label: 'United States Dollar' },
    { value: 'euro', label: 'Euro' }
]


class TypeSelect extends React.Component {
    state = {
      selectedOption: null,
    };
    handleChange = (selectedOption) => {
      this.setState({ selectedOption }, () =>
        console.log(`Option selected:`, this.state.selectedOption)
      );
    };
    render() {
      const { selectedOption } = this.state;
  
      return (
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      );
    }
  }

export default TypeSelect;
