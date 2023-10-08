import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Predmet } from 'src/app/models/predmet';
import { Profesor } from 'src/app/models/profesor';
import { PredmetService } from '../predmet/predmet.service';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  constructor(
    private httpClient: HttpClient,
    private predmetService: PredmetService
  ) {}

  getAll() {
    return this.httpClient.get<Profesor[]>(environment.api + '/profesor');
  }

  getPredmetiByProfesorId(profesorId: number): Observable<Predmet[]> {
    return this.httpClient.get<Predmet[]>(
      environment.api + `/profesor/${profesorId}/predmeti`
    );
  }

  addProfesora(profesor: Profesor): Observable<any> {
    const body = {
      password: profesor.password,
      ime: profesor.ime,
      prezime: profesor.prezime,
      email: profesor.email,
    };
    console.log(body);
    const url = `${environment.api}/profesor/`; // Prilagodite URL ruti na vašem serveru
    return this.httpClient.post(url, body);
  }

  deleteProfesora(idProfesora: number) {
    this.getPredmetiByProfesorId(idProfesora).subscribe((data) => {
      if (data) {
        data.forEach((el) => {
          this.predmetService.deletePredmet(el.id);
        });
        setTimeout(() => {
          this.httpClient
            .delete(`${environment.api}/profesor/${idProfesora}`)
            .subscribe((data) => {});
        }, 100);
      }
    });
  }
}
