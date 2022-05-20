import React, { useState } from 'react';
import Select from 'react-select';

const TypeSelect1 = (props) => {
    const options = [
        { value: 'cad', label: 'Canadian Dollar' },
        { value: 'usd', label: 'United States Dollar' },
        { value: 'euro', label: 'Euro' }
    ]

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
        if (props.id==1) {
            props.setCurrentCurrency(selectedOption.value);
        }
        else if (props.id==2){
            props.setDesiredCurrency(selectedOption.value);
        }
      };



    return (
        <div>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
        </div>
    );

};

export default TypeSelect1;
