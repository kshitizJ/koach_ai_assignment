import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {
  private apiUrl = '<API-URL>';

  constructor(private http: HttpClient) { }

  // Store JSON data
  storeJson(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/store`, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Retrieve all JSON data
  retrieveJson(): Observable<any> {
    return this.http.get(`${this.apiUrl}/retrieve`);
  }
}
