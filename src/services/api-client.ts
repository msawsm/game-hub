import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'a46ae35c8b1d45728776c5abcc27dfa7',
  },
});

export default apiClient;