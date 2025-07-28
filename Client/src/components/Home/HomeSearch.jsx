import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeSearch =() => {
  return (

<Form inline>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Geminiye Sor"
            />
          </Col>
          <Col>
            <Button type="submit">Ara</Button>
          </Col>
        </Row>
      </Form>
    
  );
}

export default HomeSearch;