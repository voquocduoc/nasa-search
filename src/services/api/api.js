import fetchJson from "../../utils/fetchJson";
import { NASA_API_URL } from "../../constant";

const api = {
  search: query => {
    return fetchJson(`${NASA_API_URL}/search?q=${query}&media_type=video`);
  },
  asset: id => fetchJson(`${NASA_API_URL}/asset/${id}`)
};

export default api;
