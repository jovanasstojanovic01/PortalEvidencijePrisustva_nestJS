import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  currentStudent: any;
  currentProfesor: any;

  constructor(private http: HttpClient) {}

  loginStudent(email: string, password: string) {
    const body = { email, password };
    const currentUser = this.submitStudentEmail(email);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return this.http.post(environment.api + `/auth/login`, body);
  }

  loginProfesor(email: string, password: string) {
    const body = { email, password };
    const currentUser = this.submitProfesorEmail(email);
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return this.http.post(environment.api + `/auth-profesor/login`, body);
  }

  submitStudentEmail(email: string): Observable<any> {
    this.currentStudent = this.http
      .get(environment.api + `/student/email/${email}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
    return this.currentStudent;
  }

  submitProfesorEmail(email: string): Observable<any> {
    this.currentProfesor = this.http
      .get(environment.api + `/profesor/email/${email}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
    return this.currentProfesor;
  }

  getCurretProfesor() {
    return this.currentProfesor;
  }

  getCurretStudent() {
    return this.currentProfesor;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
