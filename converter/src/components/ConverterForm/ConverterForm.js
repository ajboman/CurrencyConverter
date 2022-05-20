import { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import TypeConverter from '../TypeConverter/TypeConverter';

import axios from 'axios';

import '../TypeConverter/TypeConverter.css';
import '../AmountForm/AmountForm.css';


import AmountForm from '../AmountForm/AmountForm';


const ConverterForm = (props) => {

    const [currentCurrency, setCurrentCurrency] = useState('CAD');
    const [desiredCurrency, setDesiredCurrency] = useState('USD');
    const [currentAmount, setCurrentAmount] = useState(100);
    const [desiredAmount, setDesiredAmount] = useState(100);

    return (
        <Container>
            <Row>
                <Col>
                    <div className='TypeConverter'>
                        Current:
                        <TypeConverter chosen={''} />
                    </div>
                    <div className='AmountForm'>
                        <AmountForm setCurrentAmount={setCurrentAmount} />
                    </div>
                    <div>
                        {currentAmount}
                    </div>
                </Col>
                <Col>
                    <Button style={{marginTop: '150%' }} variant="dark">Convert From { currentCurrency } to { desiredCurrency }</Button>
                </Col>
                <Col>
                    <div className='TypeConverter'>
                        Desired:
                        <TypeConverter />
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default ConverterForm;