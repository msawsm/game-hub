import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a46ae35c8b1d45728776c5abcc27dfa7",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  } 
    
}

export default APIClient;
