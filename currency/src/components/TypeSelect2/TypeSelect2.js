import React, { useState } from 'react';
import Select from 'react-select';

const TypeSelect2 = () => {
  const options = [
    { value: 'cad', label: 'Canadian Dollar' },
    { value: 'usd', label: 'United States Dollar' },
    { value: 'euro', label: 'Euro' }
  ]

  const [selectedOption, setSelectedOption] = useState('');

  return (
    <Select
      value={selectedOption}
      onChange={(selectedOption) => { setSelectedOption(selectedOption )}}
      options={options}
    />
  );

};

export default TypeSelect2;
