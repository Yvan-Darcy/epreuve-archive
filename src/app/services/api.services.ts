import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://tharapi.pythonanywhere.com'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sections`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sections`, data);
  }

  // Add more methods as needed
}
