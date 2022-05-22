import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "../CSS/SearchBar.css";
import { searchByName } from "../services/server.js";

function SearchBar({ searchAction }) {
  async function handleSearch() {
    await searchByName("top gun");
    console.log("Here");
  }
  return (
    <InputGroup className="SearchBar mb-3 " style={{}}>
      <FormControl placeholder="Search a movie..." />
      <Button
        variant="outline-primary"
        id="button-addon2"
        onClick={handleSearch}
      >
        Search
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
