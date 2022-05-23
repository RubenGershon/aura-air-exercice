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
    if (!userInput) {
      setSearchErr("Please input a movie title");
      return;
    }
    setSearchErr("");
    setIsSearching(true);

    const response = await searchByName(userInput);
    setIsSearching(false);
    if (response.status === "ok") {
      setSearchResults(response.data);
    } else {
      setSearchErr(response.message);
      setSearchResults({});
    }
  }
  return (
    <InputGroup
      size="lg"
      className="mb-5"
      style={{ width: "50%", marginLeft: "25%" }}
    >
      <FormControl
        placeholder="Search for a movie..."
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
      <Button
        variant="outline-success"
        onClick={() => {
          setSearchResults({});
          setSearchErr("");
          setUserInput("");
        }}
      >
        Clear
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
