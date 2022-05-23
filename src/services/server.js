import axios from "axios";
const api = axios.create({
  baseURL: "http://www.omdbapi.com/",
});

async function searchByName(name) {
  try {
    const response = await api.get("", {
      params: {
        apikey: process.env.REACT_APP_OMDB_KEY,
        s: name,
      },
    });
    console.log(response);
    if (response.statusText === "OK") {
      if (response.data.Response === "True")
        return { status: "ok", data: response.data };
      else return { status: "error", message: response.data.Error };
    } else return { status: "error", message: response };
  } catch (error) {
    return { status: "error", message: "Server connection error" };
  }
}

async function searchByImdb(id) {
  try {
    const response = await api.get("", {
      params: {
        apikey: process.env.REACT_APP_OMDB_KEY,
        i: id,
      },
    });
    if (response.statusText === "OK") {
      return { status: "ok", data: response.data };
    } else return { status: "error", message: response };
  } catch (error) {
    return { status: "error", message: error };
  }
}

export { searchByName, searchByImdb };
