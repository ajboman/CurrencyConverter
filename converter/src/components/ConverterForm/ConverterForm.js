import { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import TypeConverter from '../TypeConverter/TypeConverter';

import axios from 'axios';

import '../TypeConverter/TypeConverter.css';
import '../AmountForm/AmountForm.css';


import AmountForm from '../AmountForm/AmountForm';


const ConverterForm = (props) => {

    const [currentCurrency, setCurrentCurrency] = useState('');
    const [desiredCurrency, setDesiredCurrency] = useState('');
    const [currentAmount, setCurrentAmount] = useState('');
    const [desiredAmount, setDesiredAmount] = useState(100);
    const [currenciesList, setCurrenciesList] = useState('');

    // const componentDidMount = () => {
    //     return (
    //     axios.get('')
    //     .then(res => {
    //         const currenciesList = res.currenciesList;
    //         this.setCurrenciesList={setCurrenciesList};
    //     })
    //     );
    // }






    return (
        <Container>
            <Row>
                <Col>
                    <div className='TypeConverter'>
                        Current:
                        <TypeConverter setCurrentCurrency={setCurrentCurrency} id={1}/>
                    </div>
                    <div className='AmountForm'>
                        <AmountForm setCurrentAmount={setCurrentAmount} />
                    </div>
                    <div>
                        {currentAmount}
                    </div>
                </Col>
                <Col>
                    <Button style={{marginTop: '150%' }} variant="dark">
                        Convert From { currentCurrency } to { desiredCurrency }
                    </Button>
                </Col>
                <Col>
                    <div className='TypeConverter'>
                        Desired:
                        <TypeConverter setDesiredCurrency={setDesiredCurrency} id={2}/>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default ConverterForm;