import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PrisustvoPoCasuService {
  constructor(private http: HttpClient) {}

  proveriPrisustvoPoCasu(
    casId: number,
    prisustvoId: number
  ): Observable<boolean> {
    const url =
      environment.api +
      `/prisustvo-po-casu/cas/${casId}/prisustvo/${prisustvoId}`;
    return this.http.get<boolean>(url);
  }

  createPrisustvoPoCasu(casId: number, prisustvoId: number): Observable<any> {
    const body = {
      cas: casId,
      prisustvo: prisustvoId,
    };
    return this.http.post<any>(environment.api + `/prisustvo-po-casu`, body);
  }

  countPrisustvoPoCasuByCasAndPredmet(predmetId: number): Observable<number[]> {
    return this.http.get<number[]>(
      environment.api + `/prisustvo-po-casu/predmet/${predmetId}/casovi/count`
    );
  }

  deletePrisustvaPoCasu(idPrisustva: number) {
    console.log('u prisustvopocasu');
    return this.http.delete(
      environment.api + `/prisustvo-po-casu/prisustvo/${idPrisustva}`
    );
  }
}
