import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaStranaComponent } from './components/pocetna-strana/pocetna-strana.component';
import { StudentStranaComponent } from './components/student-strana/student-strana.component';
import { ProfesorStranaComponent } from './components/profesor-strana/profesor-strana.component';
import { AdminStranaComponent } from './components/admin-strana/admin-strana.component';

const routes: Routes = [
  { path: '', redirectTo: '/pocetna', pathMatch: 'full' },
  { path: 'pocetna', component: PocetnaStranaComponent },
  { path: 'student', component: StudentStranaComponent },
  { path: 'profesor', component: ProfesorStranaComponent },
  { path: 'admin-strana', component: AdminStranaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
