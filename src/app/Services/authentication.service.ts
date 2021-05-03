import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestAuthentication } from '../Models/request-authentication.model';
import { LogIn } from '../Models/LogIn.model';
import { HttpService } from './http-service';
import { CreateUser } from '../Models/CreateUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpService{

    constructor(private httpclien : HttpClient) {
        super();
    }
  
    CreateUser(createUser:CreateUser): Observable<RequestAuthentication>{
        return this.httpclien.post<RequestAuthentication>(`${this.ApiAuthenticationUrl}api/acount/`,
        createUser,
        { headers: { "Content-Type": "application/vnd.arsaf.createuser+json" } });
    }
    
    Login(login: LogIn): Observable<RequestAuthentication>{
        
        return this.httpclien.post<RequestAuthentication>(`${this.ApiAuthenticationUrl}api/acount`,
        login,
        { headers: { "Content-Type": "application/vnd.arsaf.loign+json" } });
    }

}
