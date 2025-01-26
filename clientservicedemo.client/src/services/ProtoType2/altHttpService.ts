import type { AxiosResponse } from "axios";
import AltAxiosService from "./altAxiosService";

/**
 * Represents an API service to interact with the resource controllers.
 */
export abstract class AltHttpService<T> extends AltAxiosService {
  /**
   * Gets or set the path of the API for the service.
   */
  protected rootPath: string = "api";

  /**
   * The resource root path
   */
  abstract resourcePath: string;

  protected get path() {
    return [this.rootPath, this.resourcePath].filter((p) => !!p).join("/");
  }

  /**
   * Deletes a resource.
   * @param resource The resource path.
   * @param id The id of the resource.
   */
  delete(id: any): Promise<AxiosResponse<T, any>> {
    return this.axios.delete<T>(`${this.path}/${id}`);
  }

  /**
   * Retrieves a resource by id.
   * @param path The resource path.
   * @param id The id of the resource.
   */
  get(id?: any): Promise<AxiosResponse<T, any>> {
    const url = [this.path, id].filter((p) => !!p).join("/");
    return this.axios.get<T>(url);
  }

  /**
   * Patches a resource.
   * @param path The resource path.
   * @param data The resource to patch.
   */
  patch(id: any, data: any): Promise<AxiosResponse<T, any>> {
    const url = [this.path, id].filter((p) => !!p).join("/");
    return this.axios.patch<T>(url, data);
  }

  /**
   * Creates a resource.
   * @param path The resource path.
   * @param data The resource to create.
   */
  post(data: any): Promise<AxiosResponse<T, any>> {
    return this.axios.post<T>(this.path, data);
  }

  /**
   * Updates a resource.
   * @param id The resource id.
   * @param data The resource to update.
   */
  put(id: any, data: any): Promise<AxiosResponse<T, any>> {
    const url = [this.path, id].filter((p) => !!p).join("/");
    return this.axios.put<T>(url, data);
  }

  /**
   * Queries a resource.
   * @param path The resource path.
   * @param query The resource query.
   */
  query(query?: any): Promise<AxiosResponse<T[], any>> {
    return this.axios.get<T[]>(this.path, { params: query });
  }
}
