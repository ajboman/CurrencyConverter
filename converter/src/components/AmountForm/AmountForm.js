import { useState } from 'react';
import React from 'react';


const AmountInput = (props) => {

  const [amount, setAmount] = useState('');

  const handleChange = (e) => {
    setAmount((v) => e.target.validity.valid ? e.target.value : v);
    props.setCurrentAmount((v) => e.target.validity.valid ? e.target.value : v);
  };

  return (
    <fieldset>
      <input 
        type='text'
        pattern="[0-9.]*"
        value={amount}
        onChange={handleChange} />
    </fieldset>
  );
};

export default AmountInput;