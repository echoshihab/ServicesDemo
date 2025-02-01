import AltAxiosService from "./altAxiosService";

/**
 * In this http service prototype the goal is to directly retrieve the Promise<T> instead
 * without the wrapper AxiosResponse.
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
  delete(id: any): Promise<T> {
    return this.axios.delete<void, T>(`${this.path}/${id}`);
  }

  /**
   * Retrieves a resource by id.
   * @param path The resource path.
   * @param id The id of the resource.
   */
  get(id?: any): Promise<T> {
    const url = [this.path, id].filter((p) => !!p).join("/");
    return this.axios.get<void, T>(url);
  }

  /**
   * Patches a resource.
   * @param path The resource path.
   * @param data The resource to patch.
   */
  patch(id: any, data: T): Promise<T> {
    const url = [this.path, id].filter((p) => !!p).join("/");
    return this.axios.patch<void, T>(url, data);
  }

  /**
   * Creates a resource.
   * @param path The resource path.
   * @param data The resource to create.
   */
  post(data: T): Promise<T> {
    return this.axios.post<void, T>(this.path, data);
  }

  /**
   * Updates a resource.
   * @param id The resource id.
   * @param data The resource to update.
   */
  put(id: any, data: T): Promise<T> {
    const url = [this.path, id].filter((p) => !!p).join("/");
    return this.axios.put<void, T>(url, data);
  }

  /**
   * Queries a resource.
   * @param path The resource path.
   * @param query The resource query.
   */
  query(query?: any): Promise<T[]> {
    return this.axios.get<void, T[]>(this.path, { params: query });
  }
}
