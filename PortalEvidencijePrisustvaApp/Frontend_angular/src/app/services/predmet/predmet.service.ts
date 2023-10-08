import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Predmet } from 'src/app/models/predmet';
import { PrisustvoService } from '../prisustvo/prisustvo.service';
import { PrisustvoPoCasuService } from '../PrisustvoPoCasu/prisustvo-po-casu.service';
import { CasService } from '../cas/cas.service';

@Injectable({
  providedIn: 'root',
})
export class PredmetService {
  constructor(
    private httpClient: HttpClient,
    private prisustvoService: PrisustvoService,
    private casService: CasService,
    private prisustvoPoCasuService: PrisustvoPoCasuService
  ) {}

  getAll() {
    return this.httpClient.get<Predmet[]>(environment.api + '/predmet');
  }
  addPredmet(naziv: string, drzi: number) {
    const body = {
      drzi: drzi,
      naziv: naziv,
    };
    const url = `${environment.api}/predmet/`; // Postavite svoju putanju
    return this.httpClient.post(url, body);
  }

  getPredmet(id: number): Observable<Predmet> {
    const url = `${environment.api}/predmet/${id}`; // Postavite pravu putanju
    return this.httpClient.get<Predmet>(url);
  }

  deletePredmet(idPredmeta: number) {
    console.log(idPredmeta);
    this.casService.deleteCasPoPredmetu(idPredmeta).subscribe(() => {
      this.prisustvoService
        .getPrisustvaByPredmetId(idPredmeta)
        .subscribe((element) => {
          console.log('brisem prisustva');
          element.forEach((el) => {
            this.prisustvoPoCasuService.deletePrisustvaPoCasu(el.id);
          });

          this.prisustvoService
            .deletePrisustvaPoPremdetu(idPredmeta)
            .subscribe(() => {
              console.log(idPredmeta);
              this.httpClient
                .delete(`${environment.api}/predmet/${idPredmeta}`)
                .subscribe((data) => {
                  console.log(data);
                });
            });
        });
    });
  }
}
