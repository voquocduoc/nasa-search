import fetchJson from "../../utils/fetchJson";
import { NASA_API_URL, API_KEY } from "../../constant";

const api = {
  search: query => {
    return fetchJson(`${NASA_API_URL}/search?q=${query}`);
  },
  asset: id => fetchJson(`${NASA_API_URL}/search?nasa_id=${id}`)
};

export default api;
