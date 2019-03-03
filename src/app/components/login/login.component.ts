import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RouterModule, Router } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private Auth: LoginService, 
              private router: Router,
              private Admin:AuthGuard) { }


  ngOnInit() {
  }


  onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector("#email").value;
    const password = form.querySelector("#password").value;
   
    this.Auth.SetUserDetail(email, password).subscribe(data => {
      if (data.success){
        this.router.navigate(['/admin']);
        
      }else{
        alert("Error in Authentication");
      }
    });
  }

}
