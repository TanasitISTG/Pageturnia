import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Subject,
  retry,
  timer,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseRepository extends Subject<any> {
  constructor(private http: HttpClient) {
    super();
  }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  retryCount = 3;
  apiUrl = 'https://localhost:7102/api/';

  public get<T>(url: string) {
    return this.http.get<T>(this.apiUrl + url).pipe(
      retry({
        count: this.retryCount,
        delay: (error, retryCount) => {
          if (this.isRetriableError(error)) {
            return timer(180);
          }
          throw error;
        },
      }),
    );
  }

  public post<T>(url: string, data?: any) {
    return this.http.post<T>(this.apiUrl + url, data, this.httpHeader).pipe(
      retry({
        count: this.retryCount,
        delay: (error, retryCount) => {
          if (this.isRetriableError(error)) {
            return timer(180);
          }
          throw error;
        },
      }),
    );
  }

  public put<T>(url: string, data?: any) {
    return this.http.put<T>(this.apiUrl + url, data, this.httpHeader).pipe(
      retry({
        count: this.retryCount,
        delay: (error, retryCount) => {
          if (this.isRetriableError(error)) {
            return timer(180);
          }
          throw error;
        },
      }),
    );
  }

  public delete<T>(url: string) {
    return this.http.delete<T>(this.apiUrl + url).pipe(
      retry({
        count: this.retryCount,
        delay: (error, retryCount) => {
          if (this.isRetriableError(error)) {
            return timer(180);
          }
          throw error;
        },
      }),
    );
  }

  private isRetriableError(error: any): boolean {
    return error['error']?.status >= 400;
  }
}
