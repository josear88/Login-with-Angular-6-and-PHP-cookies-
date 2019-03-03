import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myData {
  message: string,
  success: boolean
}

interface myAdmin{
  success: boolean
}

interface user{
  user: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private loginUrl = '/api/auth.php';
  private infoUrl = '/api/info.php';
  private logOut = '/api/logout.php';
  
  constructor(private http: HttpClient) { }


  SetUserDetail(email, password){
   
    return this.http.post<myData>(this.loginUrl,{
      email,
      password
    });
  }


  getAdmin(): Observable<myAdmin> {

    return this.http.get<myAdmin>(this.infoUrl);
  }

  getLogOut(){
    return this.http.get(this.logOut);
  }

  getUser(){
    return this.http.get<user>(this.infoUrl);
  }

}
