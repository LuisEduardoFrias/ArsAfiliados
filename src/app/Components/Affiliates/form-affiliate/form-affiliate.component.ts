import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilities } from '../../..//Utilities/utilities';
import { PlanService } from '../../..//Services/plan.service';
import { DatePipe } from '@angular/common';
import { CreateAffiliate } from '../../..//Models/affiliate/CreateAffiliate.model';

@Component({
  selector: 'app-form-affiliate',
  templateUrl: './form-affiliate.component.html',
  styleUrls: ['./form-affiliate.component.css'],
  providers: [DatePipe]
})
export class FormAffiliateComponent extends Utilities implements OnInit {

  constructor(private router: Router, private formbuild: FormBuilder, private planService: PlanService, private datePipe: DatePipe) {
    super();
  }

  @Output()
  OnSubmit: EventEmitter<CreateAffiliate> = new EventEmitter<CreateAffiliate>();

  @Input()
  form_: FormGroup = null;

  Plans = [];
  
  form: FormGroup;

  ngOnInit(): void {
  
    this.planService.GetPlansWhereStatusTrue().subscribe(observer =>
    {
      this.Plans = observer;
    })

    if(this.form_ == null)
    {
      this.form = this.formbuild.group(
      {
        identificationCard:   ['', {Validators:[Validators.required, Validators.max(11)]}],
        name:                 ['', {Validators:[Validators.required, Validators.max(25)]} ],
        lastName:             ['', {Validators:[Validators.required, Validators.max(25)]}],
        dateTime:              this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
        nacionality:           '',
        sex:                  ['', {Validators: [Validators.required]}],
        socialSecurityNumber: ['', {Validators: [Validators.required]}],
        registrationDate:     ['', {Validators: [Validators.required]}],
        amountConsumed:        0,
        status:                true,
        planId:               [0 , {Validators: [Validators.required]}],
      });
    }
    else
    {
      this.form = this.form_;
    }
  }

  ErrorFields(field: string)
  {

    if (field === "IdentificationCard") {
      
      var identificationCard = this.form.get("IdentificationCard");

      if (identificationCard.hasError("max")) {
        return "la longitud maxima es de 11 caracteres";
      }

      if (identificationCard.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "Name") {
      
      var name = this.form.get("Name");

      if (name.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "LastName") {
      
      var lastName = this.form.get("LastName");

      if (lastName.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "Nacionality") {
      
      var nacionality = this.form.get("Nacionality");

      if (nacionality.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "Sex") {
      
      var sex = this.form.get("Sex");

      if (sex.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "SocialSecurityNumber") {
      
      var socialSecurityNumber = this.form.get("SocialSecurityNumber");

      if (socialSecurityNumber.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "RegistrationDate") {
      
      var registrationDate = this.form.get("RegistrationDate");

      if (registrationDate.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }
    else if (field === "PlanId") {
      
      var planId = this.form.get("PlanId");

      if (planId.hasError("required")) {
        return "Compo requerido";
      }

      return "";
    
    }

  }
  
  SendData() {
    this.OnSubmit.emit(this.form.value);
  }

}
