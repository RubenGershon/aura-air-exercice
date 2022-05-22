import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function DisplayResults() {
  return (
    <Container className="DisplayResults" fluid>
      <Row>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n, i) => (
          <Col md={3} key={i}>
            {n}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DisplayResults;
