import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { Student } from 'src/app/models/student';
import { PrisustvoPoCasuService } from 'src/app/services/PrisustvoPoCasu/prisustvo-po-casu.service';
import { PredmetService } from 'src/app/services/predmet/predmet.service';
import { PrisustvoService } from 'src/app/services/prisustvo/prisustvo.service';
import { ProfesorService } from 'src/app/services/profesor/profesor.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-admin-strana',
  templateUrl: './admin-strana.component.html',
  styleUrls: ['./admin-strana.component.css'],
})
export class AdminStranaComponent implements OnInit {
  tabelaData: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  tabelaData2: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  tabelaData3: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  tabelaData4: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  kolone: string[] = ['indeks', 'ime', 'prezime', ' '];
  kolone2: string[] = ['ime', 'prezime', 'predmeti', ' '];
  kolone3: string[] = ['naziv', ' '];
  kolone4: string[] = ['indeks', ' '];
  promena: boolean = false;

  noviStudent = {
    password: '',
    email: '',
    ime: '',
    prezime: '',
    indeks: 0,
  };

  noviProfesor = {
    password: '',
    email: '',
    ime: '',
    prezime: '',
  };

  noviPredmet = '';

  opcijeForm: FormGroup<any> = new FormGroup({
    opcija: new FormControl(''), // Inicijalna vrednost
    //dodatnoPolje: new FormControl(''), // Inicijalna vrednost
  });
  opcije: any[] = [];
  showInput: boolean = false;
  selectedPredmetId: number = -1;
  studentIndex: number = -1;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private studentService: StudentService,
    private profesorService: ProfesorService,
    private predmetService: PredmetService,
    private prisustvoService: PrisustvoService,
    private prisustvoPoCasu: PrisustvoPoCasuService
  ) {
    // window.onload = () => {
    //   this.function();
    // };
  }
  ngOnInit(): void {
    this.opcijeForm = this.fb.group({
      opcija: new FormControl(''),
      dodatnoPolje: new FormControl(''),
    });

    this.function();
    this.function2();
    this.function3();
  }

  getPredmete(id: number) {
    this.profesorService.getPredmetiByProfesorId(id).subscribe((data: any) => {
      this.opcije = data;
      console.log(data);
    });
  }

  toggleInput() {
    this.showInput = !this.showInput;
  }
  closeInput(id: number) {
    this.toggleInput();
    if (!this.showInput) {
      // if (this.opcijeForm) {
      //const dodatnoPoljeControl = this.opcijeForm.get('dodatnoPolje');
      //if (this.noviPredmet) {
      console.log(this.noviPredmet, id);
      this.predmetService.addPredmet(this.noviPredmet, id).subscribe(() => {
        this.getPredmete(id);
        this.function3();
        this.noviPredmet = '';
      });

      //}
      //}
    }
  }

  onSubmit() {
    const selectedOption = this.opcijeForm.value.opcija;
    // Ovde možete uraditi šta god želite sa izabranom opcijom
  }
  deleteStudent(id: number) {
    console.log('u deleteStudent');
    this.studentService.deleteStudent(id);
    setTimeout(() => {
      this.function();
    }, 1000);
  }

  deletePredmet(id: number) {
    console.log(id);
    this.predmetService.deletePredmet(id);
    setTimeout(() => {
      this.function3();
    }, 1000);
  }

  profesorRoute() {
    this.router.navigate(['/profesor']);
  }

  function() {
    this.studentService.getAll().subscribe((data: any[]) => {
      this.tabelaData.data = data;
    });
  }

  function2() {
    this.profesorService.getAll().subscribe((data: any[]) => {
      this.tabelaData2.data = data;
    });
  }

  function3() {
    this.predmetService.getAll().subscribe((data: any[]) => {
      this.tabelaData3.data = data;
    });
  }

  function4() {
    this.prisustvoService
      .getPrisustvaWithStudentInfoByPredmetId(this.selectedPredmetId)
      .subscribe((data: any[]) => {
        this.tabelaData4.data = data;
      });
  }

  kreirajNovogStudenta() {
    this.studentService
      .addStudent(this.noviStudent as Student)
      .subscribe((rezultat) => {
        console.log('Novi student kreiran:', rezultat);
        this.function();
        this.noviStudent = {
          password: '',
          email: '',
          ime: '',
          prezime: '',
          indeks: 0,
        };
      });
  }

  kreirajNovogProfesora() {
    this.profesorService
      .addProfesora(this.noviProfesor as Profesor)
      .subscribe((rezultat) => {
        console.log('Novi profesor kreiran:', rezultat);
        this.function2();
        this.noviProfesor = {
          password: '',
          email: '',
          ime: '',
          prezime: '',
        };
      });
  }

  deleteProfesora(id: number) {
    this.profesorService.deleteProfesora(id);
    setTimeout(() => {
      this.function2();
    }, 1000);
  }

  openForm(id: number) {
    this.selectedPredmetId = id;
    setTimeout(() => {
      this.function4();
    }, 10);
  }

  deletePrisustvoByStudentId(id: number) {
    this.prisustvoPoCasu.deletePrisustvaPoCasu(id).subscribe(() => {
      console.log(id);
      this.prisustvoService.deletePrisustvo(id).subscribe(() => {
        this.function4();
      });
    });
  }

  dodajPrisustvo() {
    this.studentService
      .getStudentByIndeks(this.studentIndex)
      .subscribe((data) => {
        if (data) {
          this.prisustvoService
            .pronadjiPrisustvo(data.id, this.selectedPredmetId)
            .subscribe((data2) => {
              if (!data2) {
                this.prisustvoService
                  .createPrisustvo(data.id, this.selectedPredmetId)
                  .subscribe(() => {
                    this.function4();
                  });
              }
            });
        }
      });
  }
}
