import { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import TypeConverter from '../TypeConverter/TypeConverter';

import axios from 'axios';
import '../TypeConverter/TypeConverter.css';
import '../AmountForm/AmountForm.css';


import AmountForm from '../AmountForm/AmountForm';


const ConverterForm = (props) => {

    const [currentCurrency, setCurrentCurrency] = useState('_');
    const [desiredCurrency, setDesiredCurrency] = useState('_');
    const [currentAmount, setCurrentAmount] = useState('');
    const [desiredAmount, setDesiredAmount] = useState('');
    const [responseData, setResponseData] = useState([]);



    const handleButtonClick = () => {
        axios.get('https://v6.exchangerate-api.com/v6/' + process.env.REACT_APP_API_KEY + '/pair/' + currentCurrency + '/' + desiredCurrency + '/' + currentAmount )
        .then(res => {
            setResponseData(res.data.conversion_result);
            setDesiredAmount(Math.round(res.data.conversion_result * 100) / 100);
        })
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div className='TypeConverter'>
                        Current:
                        <TypeConverter setCurrentCurrency={setCurrentCurrency} id={1} />
                    </div>
                    <div className='AmountForm'>
                        <AmountForm setCurrentAmount={setCurrentAmount} />
                    </div>
                </Col>
                <Col>
                    <Button style={{ marginTop: '150%' }} variant="dark" onClick={handleButtonClick}>
                        Convert From {currentCurrency} to {desiredCurrency}
                    </Button>
                </Col>
                <Col>
                    <div className='TypeConverter'>
                        Desired:
                        <TypeConverter setDesiredCurrency={setDesiredCurrency} id={2} />
                    </div>
                    <div className='DesiredAmount' >
                        <input readOnly value={desiredAmount} style={{margin: '5%'}} />
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default ConverterForm;