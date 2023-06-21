import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'



@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  private userId : string = "joao.silva"
  private users: User[] = [];
  public user : User | undefined;

  constructor(
    private UserRepository: UserRepository
  ) { 
    this.users = this.UserRepository.getUsers();
    this.user = this.getUsuarioLogado();
    console.log(this.user)
  }

  private getUsuarioLogado(): User | undefined {
    return this.users.find((user) => {
      return user.id === this.userId;
    });
  }

  verificaLogin():void {
    console.log('test')
  }

  ngOnInit() {
  }

}
