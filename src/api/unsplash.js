import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID fc196a52358f979f4da47b614a4dec2b76adea071a333cd1fd322978cc55013a"
  }
});
