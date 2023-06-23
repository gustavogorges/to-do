import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'



@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  private userId : string = ""
  private users: User[] = [];
  public user : User | undefined;

  constructor(
    private UserRepository: UserRepository,
    private router: Router
  ) { 
    UserRepository.getUsers().subscribe({
      next: (value) => {
        this.users = value;
      }
    })
  }

  usuario : string;
  senha : string;

  private getUsuarioLogado(): User | undefined {
    return this.users.find((user) => {
      return user.id === this.userId;
    });
  }

  verificaLogin():void {
    this.users.forEach(userFor => {
      if(this.usuario == userFor.id) {
        if(this.senha == userFor.senha){
          localStorage.setItem('UsuarioLogado', userFor.id)
          this.router.navigate(['/registroTarefa'])
        }
      }
    })
    if(localStorage.getItem('UsuarioLogado') == null){
      alert('usuario não existe ou senha incorreta');
    }
  }

  ngOnInit() {
  }

}
