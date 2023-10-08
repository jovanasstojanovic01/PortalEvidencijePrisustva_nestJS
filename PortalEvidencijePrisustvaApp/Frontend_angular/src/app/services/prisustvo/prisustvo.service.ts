import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, forkJoin, map, mergeMap, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Prisustvo } from 'src/app/models/prisustvo';

interface CasData {
  cas_id: number;
  casCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class PrisustvoService {
  constructor(private httpClient: HttpClient) {}

  getPrisustvaWithStudentInfoByPredmetId(predmetId: number) {
    return this.httpClient.get<any[]>(
      environment.api + `/prisustvo/predmet/${predmetId}`
    );
  }
  createPrisustvo(prisustvovao: number, evidentira: number) {
    const body = {
      prisustvovao: prisustvovao,
      evidentira: evidentira,
      broj_odslusanih_casova: 0,
    };
    return this.httpClient.post(environment.api + '/prisustvo', body);
  }

  getAll() {
    return this.httpClient.get<Prisustvo[]>(environment.api + '/prisustvo');
  }

  pronadjiPrisustvo(studentId: number, predmetId: number): Observable<any> {
    const url =
      environment.api + `/prisustvo/student/${studentId}/predmet/${predmetId}`;
    return this.httpClient.get(url);
  }

  increaseCasCount(prisustvoId: number): Observable<any> {
    const url =
      environment.api + `/prisustvo/increase-cas-count/${prisustvoId}`;
    return this.httpClient.put(url, {});
  }

  posecenostNaCasovima(predmetId: number): Observable<CasData[]> {
    const casoviSaBrojem$ = this.httpClient.get<any[]>(
      environment.api + `/prisustvo-po-casu/predmet/${predmetId}/casovi/count`
    );
    const sviCasovi$ = this.httpClient.get<any[]>(
      environment.api + `/cas/poPredmetu/${predmetId}`
    );

    sviCasovi$.subscribe((cas) => {
      console.log(cas);
    });

    return combineLatest([casoviSaBrojem$, sviCasovi$]).pipe(
      map(([casoviSaBrojem, sviCasovi]) => {
        const azuriraniCasovi = [...sviCasovi];

        console.log(azuriraniCasovi);
        casoviSaBrojem.forEach(({ cas_id, casCount }) => {
          const indeks = sviCasovi.findIndex((cas) => cas.cas_id === cas_id);

          if (indeks !== -1) {
            azuriraniCasovi[indeks].casCount = casCount;
          }
        });

        azuriraniCasovi.sort((a, b) => a.cas_id - b.cas_id);
        azuriraniCasovi.forEach((cas, indeks) => {
          cas.cas_id = indeks;
        });

        console.log(azuriraniCasovi);

        return azuriraniCasovi;
      })
    );
  }

  deletePrisustvaPoPremdetu(idPredmeta: number) {
    console.log('brisem');
    return this.httpClient.delete(
      environment.api + `/prisustvo/poPredmetu/${idPredmeta}`
    );
  }
  deletePrisustvo(id: number) {
    console.log('brisem');
    return this.httpClient.delete(environment.api + `/prisustvo/delete/${id}`);
  }

  getPrisustvaByPredmetId(idPRedmeta: number) {
    return this.httpClient.get<Prisustvo[]>(
      environment.api + `/prisustvo/poPredmetu/${idPRedmeta}`
    );
  }

  findAllPredmetiForStudent(id: number) {
    return this.httpClient.get<any[]>(
      environment.api + `/prisustvo/${id}/predmeti`
    );
  }
}
