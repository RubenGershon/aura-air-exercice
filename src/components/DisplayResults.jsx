import "../CSS/DisplayResults.css";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function DisplayResults({ searchResults, setMovieModal, setModalShow }) {
  return (
    <Container className="DisplayResults" fluid>
      <Row>
        {searchResults.map((movie) => (
          <Col md={3} key={uuidv4()}>
            <MovieCard
              movieData={movie}
              setMovieModal={setMovieModal}
              setModalShow={setModalShow}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DisplayResults;
