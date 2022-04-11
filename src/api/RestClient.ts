import axios, { AxiosInstance } from 'axios';

export default class RestClient {
  baseUrl!: string;
  axiosClient: AxiosInstance;
  api_key = '8e539b8fd2af3f8fecea7ef817b4b8a5';

  constructor() {
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.axiosClient = axios.create({ baseURL: this.baseUrl });
  }

  get(url: string, query?: any) {
    return this.axiosClient
      .get(`${this.baseUrl}${url}`, {
        params: { api_key: this.api_key, query }
      })
      .then((res) => res)
      .catch((err) => Promise.reject(err));
  }
}
