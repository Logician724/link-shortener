import './App.css';
import React, { useState } from 'react';
import LinkViewer from './LinkViewer';
import LinkSubmitter from './LinkSubmitter';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [type, setType] = useState('none');
  const [linkMessage, setLinkMessage] = useState('');


  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center mb-4">
          <Col>
            <h1 className="display-1">LnkShrtnr</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-4">
          <Col>
            <LinkViewer type={type} linkMessage={linkMessage} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="submitter" xs={10} md={8} lg={8}>
            <LinkSubmitter setType={setType} setLinkMessage={setLinkMessage} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
