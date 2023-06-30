import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';

interface Usuario {
  username : string;
  nome : string;
  email : string;
  senha : string;
}

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {

  constructor(private userRepository : UserRepository) { }

  ngOnInit() {
  }

  usuario : Usuario = {
    username : "",
    nome : "",
    email : "",
    senha : ""
  }

  cadastrarUser() {
    console.log('cadastrou')
    let usuarioNovo : User = {
      id : this.usuario.username,
      name : this.usuario.nome,
      email : this.usuario.email,
      password : this.usuario.senha
    }

    this.userRepository.postUser(usuarioNovo)
    .subscribe(
      usuarioNovo => {
        console.log('Usuario adicionado', usuarioNovo)
      },
      (erro:any) => {
        console.log(erro)
      }
    )

    
  }

}
