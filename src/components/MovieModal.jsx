import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MovieModal({ movieData, show, onHide }) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {console.log(movieData)}
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {movieData.Title}
          <br />
          {movieData.Type} | {movieData.Rated} | {movieData.Runtime} |{" "}
          {movieData.Genre} | {movieData.Released}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Actors</h4>
        <p>{movieData.Actors}</p>
        <h4>Plot</h4>
        <p>{movieData.Plot}</p>
        <h4>Awards</h4>
        <p>{movieData.Awards}</p>
        <h4>Ratings</h4>
        <p>
          Metascore : {movieData.Metascore} | ImdbId : {movieData.imdbID}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieModal;
