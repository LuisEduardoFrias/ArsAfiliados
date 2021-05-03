import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { HomeComponent } from '../Home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formbuild: FormBuilder,
    private authentication: AuthenticationService,
    private auth: AuthService,
    private router: Router) { }

  form: FormGroup;

  ngOnInit(): void {

    this.form = this.formbuild.group({
      Email: { '' : { Validators: [Validators.email] } },
      Password: { '' : { Validators : [Validators.min(8)]}}
    })

  }


  LogIn() {

    
    this.auth.ChangeLogin(true);
    
    this.router.navigate(['']);
    


    //this.authentication.Login(this.form.value).subscribe(observable =>
    //{
    //  alert(observable);
    //  console.log(observable);
    //
    //})

  }

}
