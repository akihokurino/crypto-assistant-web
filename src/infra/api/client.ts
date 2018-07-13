import "whatwg-fetch";
import {handleError} from "./error_handler";

interface IApiClient {
  post(path: string, body: Uint8Array): Promise<Uint8Array>;
}

class ApiClient implements IApiClient {
  private baseURL: string = "https://crypto-assistant-dev.appspot.com/twirp";

  public post(path: string, body: Uint8Array): Promise<Uint8Array> {
    const method = "POST";
    const headers = {
      'Accept': 'application/protobuf',
      'Content-Type': 'application/protobuf',
    };

    const option: RequestInit = {
      body,
      method,
      headers,
    };

    return fetch(this.baseURL + path, option)
      .then(handleError)
      .then((res: Response): Promise<ArrayBuffer> => {
        return res.arrayBuffer();
      }).then((buffer: ArrayBuffer): Uint8Array => {
        return new Uint8Array(buffer);
      });
  }
}

const createApiClient = (): IApiClient => {
  return new ApiClient();
};

export { IApiClient, createApiClient };