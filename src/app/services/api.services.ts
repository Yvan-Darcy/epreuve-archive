import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sections`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sections`, data);
  }

  //dynamic api call
  form(
    router: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any
  ): Observable<any> {
    //router is same as endpoint like /contact
    const url = `${this.apiUrl}/${router}/`;

    switch (method) {
      case 'GET':
        return this.http.get<any>(url);
      case 'POST':
        return this.http.post<any>(url, body);
      case 'PUT':
        return this.http.put<any>(url, body);
      case 'DELETE':
        return this.http.delete<any>(url);
      default:
        throw new Error(`Unsupported method: ${method}`);
    }
  }
}
