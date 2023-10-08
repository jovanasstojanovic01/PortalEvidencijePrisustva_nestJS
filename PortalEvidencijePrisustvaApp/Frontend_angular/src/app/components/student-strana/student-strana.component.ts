import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { PrisustvoPoCasuService } from 'src/app/services/PrisustvoPoCasu/prisustvo-po-casu.service';
import { CasService } from 'src/app/services/cas/cas.service';
import { PrisustvoService } from 'src/app/services/prisustvo/prisustvo.service';
import emailjs from '@emailjs/browser';
import { PredmetService } from 'src/app/services/predmet/predmet.service';
import { Predmet } from 'src/app/models/predmet';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-strana',
  templateUrl: './student-strana.component.html',
  styleUrls: ['./student-strana.component.css'],
})
export class StudentStranaComponent {
  currentUser: any;
  unos: string = '';
  cas: any;
  predmet: any;
  prisustvo: any;
  tabelaData: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  kolone: string[] = ['predmet', 'prisustvo'];
  brcasova: number = 0;

  constructor(
    private prisustvoPoCasuSevice: PrisustvoPoCasuService,
    private prisustvoService: PrisustvoService,
    private predmetService: PredmetService,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private casService: CasService
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    console.log(state);
    if (state) {
      localStorage.setItem('currentState', JSON.stringify(state));
      console.log(state['key']);
      this.currentUser = this.authService.submitStudentEmail(state['key']);
      console.log(this.currentUser);
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    } else {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
      }
    }
  }

  async ngOnInit(): Promise<void> {
    const state = localStorage.getItem('currentState');
    if (state) {
      const parsedState = JSON.parse(state);
      console.log(parsedState['key']);
      this.authService
        .submitStudentEmail(parsedState['key'])
        .subscribe((student) => {
          this.currentUser = student;
          console.log(this.currentUser);
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

          this.function();
        });
    } else {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser && storedUser !== 'undefined') {
        try {
          this.currentUser = JSON.parse(storedUser);
        } catch (error) {
          console.error('Error parsing currentUser from localStorage:', error);
        }
      }
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/pocetna']);
  }

  submitForm() {
    console.log(this.unos);
    if (this.unos) {
      this.casService.pretraziCasovePoSifri(this.unos).subscribe((response) => {
        this.cas = response;
        console.log(this.cas.id);
        this.casService
          .getPredmetIdByCasId(this.cas.id)
          .subscribe((predmetId: number) => {
            this.predmet = predmetId;
            console.log(this.predmet);
            if (this.currentUser && this.predmet) {
              this.prisustvoService
                .pronadjiPrisustvo(this.currentUser.id, this.predmet)
                .subscribe((response) => {
                  console.log('oj');
                  if (response) {
                    this.prisustvo = response;
                    if (this.cas && this.prisustvo) {
                      console.log('Unos:', this.cas);
                      this.prisustvoPoCasuSevice
                        .proveriPrisustvoPoCasu(this.cas.id, this.prisustvo.id)
                        .subscribe((res) => {
                          if (!res) {
                            const trenutnoVreme = new Date();
                            console.log(trenutnoVreme);
                            const prijava = new Date(this.cas.prijava_do);
                            console.log(prijava);
                            if (trenutnoVreme.getTime() < prijava.getTime()) {
                              this.prisustvoPoCasuSevice
                                .createPrisustvoPoCasu(
                                  this.cas.id,
                                  this.prisustvo.id
                                )
                                .subscribe((re) => {
                                  if (re) {
                                    this.prisustvoService
                                      .increaseCasCount(response.id)
                                      .subscribe(() => {
                                        let subject: Predmet;
                                        this.predmetService
                                          .getPredmet(this.predmet)
                                          .subscribe((data) => {
                                            subject = data;
                                            emailjs.init('xIeG0nnfskt6YPWYA');
                                            emailjs
                                              .send(
                                                'service_1akft71',
                                                'template_zp6rs1d',
                                                {
                                                  to_name:
                                                    this.currentUser.ime +
                                                    ' ' +
                                                    this.currentUser.prezime,
                                                  subject_name: subject.naziv,
                                                  sender_email:
                                                    this.currentUser.email,
                                                }
                                              )
                                              .then();
                                          });
                                      });
                                  }
                                });
                            } else {
                              alert('Neuspelo prijavljivanje časa.');
                              console.log('isteklo vreme');
                            }
                          }
                        });
                    }
                  }
                });
            }
          });
      });
    }
  }

  function() {
    this.prisustvoService
      .findAllPredmetiForStudent(this.currentUser.id)
      .subscribe((data: any[]) => {
        this.tabelaData.data = data;
        setTimeout(() => {
          this.tabelaData.data.forEach((e) => {
            console.log(e.prisustvo_predmet_id);
            this.casService
              .countCasoviByPredmetId(e.prisustvo_predmet_id)
              .subscribe((data) => {
                if (e.broj_odslusanih_casova > 0) {
                  e.broj_odslusanih_casova =
                    (e.broj_odslusanih_casova / data) * 100;
                  //console.log(e.broj_odslusanih_casova, data);
                }
              });
          });
        }, 10);
      });
  }
}

// emailjs.send('service_1akft71', 'template_zp6rs1d', {
//   to_name: 'yxc',
//   subject_name: 'yxc',
// });
