import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository';

interface Usuario {
  username : string;
  nome : string;
  email : string;
  senha : string;
  cardAdd : boolean;
	cardEdit : boolean;
	cardRemove : boolean;
	cardMove : boolean;
	propertieAdd : boolean;
	propertieEdit : boolean;
	propertieRemove : boolean;
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

    cardAdd : boolean = false
	  cardEdit : boolean = false
  	cardRemove : boolean = false
	  cardMove : boolean = false
	  propertieAdd : boolean = false
	  propertieEdit : boolean = false
	  propertieRemove : boolean = false

  usuario : Usuario = {
    username : "",
    nome : "",
    email : "",
    senha : "",
    cardAdd : false,
	  cardEdit : false,
  	cardRemove : false,
	  cardMove : false,
	  propertieAdd : false,
	  propertieEdit : false,
	  propertieRemove : false
  }

  cadastrarUser() {
    console.log('cadastrou')
    let usuarioNovo : User = {
      id : this.usuario.username,
      name : this.usuario.nome,
      email : this.usuario.email,
      password : this.usuario.senha,
      cardAdd : this.cardAdd,
	    cardEdit : this.cardEdit,
	    cardRemove : this.cardRemove,
	    cardMove : this.cardMove,
	    propertieAdd : this.propertieAdd,
	    propertieEdit : this.propertieEdit,
	    propertieRemove : this.propertieRemove
    }

    console.log(usuarioNovo.cardAdd);

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
