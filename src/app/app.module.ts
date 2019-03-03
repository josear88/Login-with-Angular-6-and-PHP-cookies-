import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { AdminComponent } from './components/admin/admin.component';

import { AuthGuard } from './auth/auth.guard';


const appRoutes: Routes = [
  { 
    path:'', 
    component: LoginComponent 
  },
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [AuthGuard]  
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
