import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdministratorService {
  private baseUrl = 'http://localhost:3000/administrator'; // Postavite pravilnu adresu API-ja

  constructor(private http: HttpClient) {}

  checkIfAdminExists(idProfesora: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/check/${idProfesora}`);
  }
}
