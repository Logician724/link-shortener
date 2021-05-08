import './App.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LinkViewer from './LinkViewer';
import LinkSubmitter from './LinkSubmitter';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [type, setType] = useState('none');
  const [linkMessage, setLinkMessage] = useState('');

  let { shortLink } = useParams();

  useEffect(() => {
    if (shortLink) {
      setType('error');
      setLinkMessage(`${window.location.protocol}//${window.location.host}/#/${shortLink} does not exist`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center mb-4">
          <Col>
            <h1 className="display-1">ShrLnk</h1>
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
