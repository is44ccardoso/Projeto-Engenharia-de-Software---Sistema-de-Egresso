import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  constructor(private loginService: LoginService) { }
  public user: User = new User();
  ngOnInit() {
    this.loginService.getUser().subscribe(
      response => {
        this.users = response;
      }
    );
  }
  public salvar() {
    this.loginService.salvar(this.user).subscribe(
      response => {
        alert('Salvo com sucesso');
      },
      error => {
        alert('Algo errado aconteceu');
      }
    );
  }

}
