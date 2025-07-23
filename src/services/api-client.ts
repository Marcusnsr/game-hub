import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "19426e490b364e27a3e7198372873caf",
  },
});
