import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../Services/authentication.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private formbuild: FormBuilder,private authentication: AuthenticationService) { }

  form : FormGroup;

  ngOnInit(): void {
    this.form = this.formbuild.group({
      Name:       { '' : { Validators: [Validators.max(25)] }},
      LastName :  { '' : { Validators: [Validators.max(25)] }},
      Email:      { '' : { Validators: [Validators.email  ] }},
      Password:   { '' : { Validators: [Validators.max(8) ] }}
    })
  }

  CreateAccount() {
    this.authentication.CreateUser(this.form.value).subscribe(observable => {
      console.log(observable);
    })
  }

}
