import React, { useState } from "react";
import "./CSS/App.css";
import SearchBar from "./components/SearchBar.jsx";
import DisplayResults from "./components/DisplayResults.jsx";

function App() {
  const [searchResult, setSearchResult] = useState("");
  return (
    <div className="App d-flex flex-column justify-content-around">
      <SearchBar searchAction={setSearchResult} />
      <DisplayResults />
    </div>
  );
}

export default App;
