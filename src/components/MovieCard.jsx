import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { searchByImdb } from "../services/server";

function MovieCard({ movieData, setMovieModal, setModalShow }) {
  async function handleSeeMore() {
    const response = await searchByImdb(movieData.imdbID);
    setMovieModal(response.data);
    setModalShow(true);
    }
    
  return (
    <Card
      border="primary"
      style={{
        width: "90%",
        height: "60vh",
        boxShadow: "10px 10px 5px lightblue",
      }}
      className="MovieCard my-3"
    >
      <Card.Img
        variant="top"
        src={movieData.Poster}
        style={{ maxWidth: "100%", maxHeight: "65%", margin: "auto" }}
      />
      <Card.Body>
        <Card.Title>
          <b>{movieData.Title}</b>
        </Card.Title>
        <Card.Text>
          <b>Year:</b> {movieData.Year}
          <br />
          <b>Type:</b> {movieData.Type}
          <br />
          <b>imdbID:</b> {movieData.imdbID}
        </Card.Text>

        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleSeeMore}>
            See More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
