import axios from "axios";
const api = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=cebfe1df",
});

async function searchByName(name) {
  const response = await api.get("&t=top+gun");
  console.log(response);
}

export { searchByName };
