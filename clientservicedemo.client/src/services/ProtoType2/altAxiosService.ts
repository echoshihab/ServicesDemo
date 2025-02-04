import { useSnackbarStore } from "@/toasts/snackbarStore";
import axios, { type AxiosInstance, type AxiosResponse } from "axios";

const axiosSingleton = axios.create({
  baseURL: import.meta.env.BASE_URL, // set to / by default
  withCredentials: true,
});

// extract data
const handleResponse = ({ data }: AxiosResponse) => {
  const snackbarStore = useSnackbarStore();
  snackbarStore.showSnackbar("Successfully fetched data");
  return data;
};

const handleError = (error: any) => Promise.reject(error);

axiosSingleton.interceptors.response.use(handleResponse, handleError);

abstract class AltAxiosService {
  protected readonly axios: AxiosInstance = axiosSingleton;
  protected abstract readonly rootPath: string;
}

export default AltAxiosService;
