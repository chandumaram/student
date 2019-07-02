import { Component } from '@angular/core';
import { LoginInfo } from './logininfo';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  login:LoginInfo;
  status:boolean;
  message:string;

  constructor(private loginsvc:LoginService) { 
    this.loginsvc=loginsvc;
  } 
  onSubmit(login:any){
    let u:LoginInfo={userName:login.username,password:login.password}
   if(this.loginsvc.CheckLogin(u)){
      this.status=true;
      this.message="Welcome to Chandu";
   }else{
     this.status=false;
     this.message="Sorry... invalid user name or password";
   }
  }

}