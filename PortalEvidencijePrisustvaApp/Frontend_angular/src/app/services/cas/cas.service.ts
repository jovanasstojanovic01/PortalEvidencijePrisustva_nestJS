import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Cas } from 'src/app/models/cas';

@Injectable({
  providedIn: 'root',
})
export class CasService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Cas[]>(environment.api + '/cas');
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
  }

  createCas(sifra: string, prijava: number, ima: number) {
    const myDate: Date = new Date();
    const vremePrijava: Date = new Date(myDate.getTime() + prijava * 60000);

    const requestBody = {
      sifra: sifra,
      prijava_do: this.formatDate(vremePrijava),
      ima: ima,
    };

    this.httpClient
      .post(environment.api + `/cas`, requestBody)
      .subscribe((response) => {
        console.log('Čas je uspešno kreiran.', response);
      });
  }

  pretraziCasovePoSifri(sifra: string): Observable<any> {
    console.log(sifra);
    const url = environment.api + `/cas/pretrazi/${sifra}`;
    return this.httpClient.get(url);
  }

  getPredmetIdByCasId(casId: number): Observable<number> {
    return this.httpClient.get<number>(
      environment.api + `/cas/${casId}/predmetId`
    );
  }

  countCasoviByPredmetId(predmetId: number): Observable<number> {
    return this.httpClient.get<number>(
      environment.api + `/cas/countByPredmet/${predmetId}`
    );
  }

  //getPrisustvaWithStudentInfoByPredmetId, deletePrisustvaPoCasu, deletePrisustvaPoPremdetu
  deleteCasPoPredmetu(idPredmeta: number) {
    console.log(idPredmeta);
    return this.httpClient.delete<void>(
      environment.api + `/cas/poPredmetu/${idPredmeta}`
    );
  }
}
