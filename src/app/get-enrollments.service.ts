import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetEnrollmentsService {
  private apiUrl = 'http://localhost:8070';
  constructor(private http: HttpClient) { }
  getEnrollments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/childpolicyenrollments/child/1`);
  }
}
