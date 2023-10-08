import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Predmet } from 'src/app/models/predmet';
import { CasService } from 'src/app/services/cas/cas.service';
import { PrisustvoService } from 'src/app/services/prisustvo/prisustvo.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';
import { MatTableDataSource } from '@angular/material/table';
import { PrisustvoPoCasuService } from 'src/app/services/PrisustvoPoCasu/prisustvo-po-casu.service';
import { AdministratorService } from 'src/app/services/administrator/administrator.service';

@Component({
  selector: 'app-profesor-strana',
  templateUrl: './profesor-strana.component.html',
  styleUrls: ['./profesor-strana.component.css'],
})
export class ProfesorStranaComponent implements OnInit {
  sifraCasa: string = '';
  trajanje: number = 0;
  optionsFromDatabase: Predmet[] = [];
  selectedOption: number = 0;
  currentUser: any;
  tabelaData: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  kolone: string[] = ['indeks', 'ime', 'prezime', 'prisustvovao/la'];
  brcasova: number = 0;
  brojeviPrisustvaPoCasu: number[] = [];
  showChart = false;
  tmp: number = 0;
  brojStudenataPoPredmetu: number = 0;
  isProfesorAdmin: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private prisustvoService: PrisustvoService,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,
    private prisustvoPoCasuService: PrisustvoPoCasuService,
    private profesorService: ProfesorService,
    private casService: CasService,
    private adminService: AdministratorService
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    console.log(state);
    if (state) {
      localStorage.setItem('currentState', JSON.stringify(state));
      console.log(state['key']);
      this.currentUser = this.authService.submitProfesorEmail(state['key']);
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
        .submitProfesorEmail(parsedState['key'])
        .subscribe((profesor) => {
          this.currentUser = profesor;
          console.log(this.currentUser);
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          console.log(this.currentUser, 'id je:', this.currentUser.id);
          this.profesorService
            .getPredmetiByProfesorId(this.currentUser.id)
            .subscribe((data) => {
              this.optionsFromDatabase = data;
              this.adminService
                .checkIfAdminExists(this.currentUser.id)
                .subscribe((data) => {
                  this.isProfesorAdmin = data;
                  if (data) localStorage.setItem('admin', 'admin');
                });
            });
        });
    } else {
      const storedUser = localStorage.getItem('currentUser');
      const storeAdmin = localStorage.getItem('admin');
      if (storeAdmin == 'admin') this.isProfesorAdmin = true;
      if (storedUser && storedUser !== 'undefined') {
        try {
          this.currentUser = JSON.parse(storedUser);
        } catch (error) {
          console.error('Error parsing currentUser from localStorage:', error);
        }
      }
    }
  }

  kreirajCas() {
    this.casService.createCas(
      this.sifraCasa,
      this.trajanje,
      this.selectedOption
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/pocetna']);
  }

  function() {
    console.log('selected option:', this.selectedOption);

    this.tmp = this.selectedOption;

    if (this.selectedOption) {
      this.prisustvoPoCasuService
        .countPrisustvoPoCasuByCasAndPredmet(this.selectedOption)
        .subscribe((data) => {
          this.brojeviPrisustvaPoCasu = data;
          console.log(this.brojeviPrisustvaPoCasu);
        });

      this.prisustvoService
        .getPrisustvaWithStudentInfoByPredmetId(this.selectedOption)
        .subscribe((data: any[]) => {
          this.brojStudenataPoPredmetu = data.length;
          this.casService
            .countCasoviByPredmetId(this.selectedOption)
            .subscribe((brojCasova) => {
              this.brcasova = brojCasova;
              this.tabelaData.data = data;
              console.log(this.tabelaData.data);
              this.tabelaData.data.forEach((e) => {
                if (this.brcasova != 0) {
                  e.broj_odslusanih_casova =
                    (e.broj_odslusanih_casova / this.brcasova) * 100;
                } else {
                  e.broj_odslusanih_casova = 0;
                }
              });
            });
        });
    }
  }
  adminRoute() {
    this.router.navigate(['/admin-strana']);
  }
}
