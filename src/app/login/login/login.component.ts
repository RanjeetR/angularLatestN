import { Component, OnInit } from '@angular/core';
import { FakeUserRegistrationService } from '../../services/fake-user-registration.service'
import { LoginServiceService } from '../../services/login-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[FakeUserRegistrationService,LoginServiceService]
})
export class LoginComponent implements OnInit {
  
  private username = '';
  private password = '';
  constructor( private loginService: LoginServiceService) { }

  ngOnInit() {
    // to ensure we saave user in local storage
    FakeUserRegistrationService.createUser();
  }
  login(){
    this.loginService.validateUser(this.username,this.password)
  }
}
