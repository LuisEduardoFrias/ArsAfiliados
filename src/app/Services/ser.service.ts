import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
    
export class serSerivece{

    login = false;
    
    ChangeLogin(isLogin : boolean) {
    this.login = isLogin;
  }

}