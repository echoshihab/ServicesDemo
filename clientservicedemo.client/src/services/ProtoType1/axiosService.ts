import axios, { AxiosError, type AxiosInstance } from "axios";

const axiosSingleton = axios.create({
  baseURL: import.meta.env.BASE_URL, // set to / by default
  withCredentials: true,
});

abstract class AxiosService {
  protected readonly axios: AxiosInstance = axiosSingleton;
  protected abstract readonly rootPath: string;

  protected passthroughErrorHandler(error: AxiosError) {
    return error.response;
  }

  protected isAxiosError(error: unknown): error is AxiosError {
    return (error as AxiosError).isAxiosError !== undefined;
  }

  protected genericErrorHandler(error: any) {
    // Check if the error is an AxiosError
    if (error.response?.status === 400) {
      console.log("400 error");
    } else if (error.response?.status === 500) {
      console.log("500 error");
    }

    // Safely return the response if it exists
    return error.response;
  }
}

export default AxiosService;
