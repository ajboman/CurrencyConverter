import React, { useState } from 'react';
import Select from 'react-select';

const TypeSelect1 = (props) => {
    const options = [
        { value: 'cad', label: 'Canadian Dollar' },
        { value: 'usd', label: 'United States Dollar' },
        { value: 'euro', label: 'Euro' }
    ]


    const [selectedOption, setSelectedOption] = useState('');
   
    return (
        <div>
            <Select
                value={selectedOption}
                onChange={(selectedOption) => { setSelectedOption(selectedOption) }}
                options={options}
            />
        </div>
    );

};

export default TypeSelect1;
