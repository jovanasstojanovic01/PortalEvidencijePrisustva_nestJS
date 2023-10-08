import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Student[]>(environment.api + '/student');
  }

  getStudentByIndeks(id: number) {
    return this.httpClient.get<Student>(
      environment.api + '/student/indeks/' + id
    );
  }

  deleteStudent(id: number): Observable<any> {
    console.log('u deleteStudent u StudentService');
    const url = `${environment.api}/prisustvo-po-casu/student/${id}`;
    this.httpClient.delete<void>(url).subscribe((data) => {
      console.log(data);
      const url2 = `${environment.api}/prisustvo/studentDelete/${id}`;
      this.httpClient.delete<void>(url2).subscribe((data2) => {
        console.log(data2);
        const url3 = `${environment.api}/student/${id}`;
        this.httpClient.delete<void>(url3).subscribe((data3) => {
          console.log(data3);
        });
      });
    });
    const el: any = null;
    return el;
  }

  addStudent(student: Student): Observable<any> {
    const body = {
      password: student.password,
      ime: student.ime,
      prezime: student.prezime,
      email: student.email,
      indeks: student.indeks,
    };
    console.log(body);
    const url = `${environment.api}/student/`; // Prilagodite URL ruti na vašem serveru
    return this.httpClient.post(url, body);
  }
}
