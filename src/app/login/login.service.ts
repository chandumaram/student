import { Injectable } from '@angular/core';
import { LoginInfo } from './logininfo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  CheckLogin(login:LoginInfo):boolean{
    if(login.userName=='chandu' && login.password==123456)
    {
      return true;
    }
    else
    {
      return false;
    }
    
  }
}
