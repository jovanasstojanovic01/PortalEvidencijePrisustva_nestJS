import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-pocetna-strana',
  templateUrl: './pocetna-strana.component.html',
  styleUrls: ['./pocetna-strana.component.css'],
})
export class PocetnaStranaComponent {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  email: string = '';
  password: string = '';
  userType: string = 'student';
  resStudent: any;
  resProfesor: any;

  submit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('User Type:', this.userType);

    if (this.userType === 'student') {
      this.authService.loginStudent(this.email, this.password).subscribe({
        next: (response: any) => {
          const token = response.access_token;
          localStorage.setItem('jwtToken', token);
          const data = { key: this.email };
          this.router.navigate(['/student'], { state: data });
        },
        error: (error) => {
          alert('Došlo je do greške pri prijavi, Pokušajte ponovo.');
          console.error('Greška pri prijavi:', error);
        },
      });
    } else if (this.userType === 'profesor') {
      this.authService.loginProfesor(this.email, this.password).subscribe({
        next: (response: any) => {
          const token = response.access_token;
          localStorage.setItem('jwtToken', token);
          const data = { key: this.email };
          this.router.navigate(['/profesor'], { state: data });
        },
        error: (error) => {
          console.error('Greška pri prijavi:', error);
        },
      });
    }
  }
}
