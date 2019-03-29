import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getUser().subscribe(
      response => {
        this.users = response;
      }
    );
  }

}
