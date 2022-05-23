import "../CSS/SearchBar.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import InputGroup from "react-bootstrap/InputGroup";
import { searchByName } from "../services/server.js";
import FormControl from "react-bootstrap/FormControl";

function SearchBar({ setSearchResults, setSearchErr }) {
  const [userInput, setUserInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  async function handleSearch() {
    setSearchErr("");
    setIsSearching(true);

    const response = await searchByName(userInput);
    if (response.status === "ok") {
      setIsSearching(false);
      setSearchResults(response.data);
    } else setSearchErr("an error occured");
  }
  return (
    <InputGroup
      className="SearchBar mb-3 "
      style={{ width: "50%", marginLeft: "25%" }}
    >
      <FormControl
        placeholder="Search a movie..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button
        variant="outline-primary"
        id="button-addon2"
        disabled={isSearching ? true : false}
        onClick={handleSearch}
      >
        {isSearching ? (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : (
          "Search"
        )}
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
