import { Col, Container, Row } from 'react-bootstrap';

import ConverterForm from '../ConverterForm/ConverterForm';

const MainPanel = () => {
    return (
        <Container className='container'>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <ConverterForm />
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    );
}

export default MainPanel;