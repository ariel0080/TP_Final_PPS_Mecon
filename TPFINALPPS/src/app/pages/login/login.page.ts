import { Component, OnInit } from '@angular/core';
//import { AuthGuardService } from 'src/app/services/auth-guard.service';
//import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //constructor(private authService: AuthenticationService) { }
  constructor() { }

  ngOnInit() {
  }

  login(){
   // this.authService.login();
  }
}
