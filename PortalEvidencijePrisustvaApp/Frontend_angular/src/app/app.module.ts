import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PocetnaStranaComponent } from './components/pocetna-strana/pocetna-strana.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfesorStranaComponent } from './components/profesor-strana/profesor-strana.component';
import { StudentStranaComponent } from './components/student-strana/student-strana.component';
import { ChartComponent } from './components/profesor-strana/chart/chart.component';
import { AdminStranaComponent } from './components/admin-strana/admin-strana.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaStranaComponent,
    ProfesorStranaComponent,
    StudentStranaComponent,
    ChartComponent,
    AdminStranaComponent,
  ],
  imports: [
    MatTableModule,
    MatToolbarModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
