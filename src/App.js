import "./CSS/App.css";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import MovieModal from "./components/MovieModal";
import SearchBar from "./components/SearchBar.jsx";
import DisplayResults from "./components/DisplayResults.jsx";

function App() {
  const [searchResults, setSearchResults] = useState({});
  const [movieModal, setMovieModal] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const [err, setErr] = useState("");

  return (
    <div className="App py-3">
      <SearchBar
        setSearchResults={setSearchResults}
        setSearchErr={setErr}
        setMovieModal={setMovieModal}
      />
      {err ? (
        <Alert
          key="danger"
          variant="danger"
          style={{ width: "50%", marginLeft: "25%" }}
        >
          {err}
        </Alert>
      ) : (
        ""
      )}
      {Object.keys(searchResults).length ? (
        <DisplayResults
          searchResults={searchResults.Search}
          setMovieModal={setMovieModal}
          setModalShow={setModalShow}
        />
      ) : (
        ""
      )}
      {Object.keys(movieModal).length ? (
        <MovieModal
          movieData={movieModal}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
