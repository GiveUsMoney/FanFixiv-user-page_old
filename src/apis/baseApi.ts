import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export abstract class BaseApi {
  protected axiosInstance!: AxiosInstance;

  constructor() {
    this.initAxiosInstance();
  }

  private initAxiosInstance() {
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
    });
  }

  protected get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.get<T>(url, config).then(({ data }) => data);
  }

  protected post<T, D>(
    url: string,
    body?: D,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.axiosInstance
      .post<T>(url, body, config)
      .then(({ data }) => data);
  }
}
