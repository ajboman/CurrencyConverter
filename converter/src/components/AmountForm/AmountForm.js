import { useState } from 'react';
import React from 'react';


const AmountInput = (props) => {

  const [amount, setAmount] = useState(100);

  const handleChange = (e) => {
    setAmount(e.target.value);
    props.setCurrentAmount(e.target.value);
  };

  return (
    <fieldset>
      <input value={amount}
        onChange={handleChange} />
    </fieldset>
  );
};

export default AmountInput;