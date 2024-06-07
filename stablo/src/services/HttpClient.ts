// Utils
import { getAPIErrorMessage } from '@/utils';

const API_END_POINT = `${process.env.API_END_POINT}`;

class HttpClientHelper {
  private _apiName: string;

  constructor() {
    this._apiName = API_END_POINT;
  }

  private async request<T>(
    method: string,
    url: string,
    options: RequestInit = {},
  ): Promise<T> {
    return getAPIErrorMessage<T>(async () => {
      const response = await fetch(`${this._apiName}${url}`, {
        method,
        headers: {
          accept: 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    });
  }

  get<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request<T>('GET', url, options);
  }

  post<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request<T>('POST', url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
  }

  put<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request<T>('PUT', url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
  }

  patch<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request<T>('PATCH', url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
  }

  delete<T>(url: string, options?: RequestInit): Promise<T> {
    return this.request<T>('DELETE', url, options);
  }
}

export const HttpClient = new HttpClientHelper();
