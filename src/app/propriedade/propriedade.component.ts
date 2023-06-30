import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'

interface Propriedade {
  nomePropriedade : string,
  tipoPropriedade : string,
  valorPropriedade ?: string,
  modalEdit : boolean
}

@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.component.html',
  styleUrls: ['./propriedade.component.css']
})
export class PropriedadeComponent implements OnInit {

  private userId : string = ""
  private users: User[] = [];
  public user : User | undefined;

  constructor(
    private UserRepository: UserRepository
    ) {} 
  

  ngOnInit() {
    if(localStorage.getItem('ListaPropriedades') != null) {
      this.listaPropriedades = JSON.parse(localStorage.getItem('ListaPropriedades'))
    }
  }

  listaPropriedades : Propriedade[] = [];
  nomePropriedade : string;
  tipoPropriedade : string;

  modalEdit : boolean = false;
  novoNome : string;
  novoTipo : string;

  propriedade : Propriedade = {
    nomePropriedade : null,
    tipoPropriedade : null,
    valorPropriedade : null,
    modalEdit : false
  }

  cadastraPropriedade() : void {
    const novaPropriedade : Propriedade = {
      nomePropriedade : this.propriedade.nomePropriedade,
      tipoPropriedade : this.propriedade.tipoPropriedade,
      modalEdit : this.propriedade.modalEdit
    }

    this.listaPropriedades.push(novaPropriedade);
    
    localStorage.setItem('ListaPropriedades', JSON.stringify(this.listaPropriedades));

    // zerar campos dos inputs
    this.propriedade.tipoPropriedade = null;
    this.propriedade.nomePropriedade = null
  }

  removerPropriedade(propriedade : Propriedade) {
    this.listaPropriedades.splice(this.listaPropriedades.indexOf(propriedade,1));
    localStorage.setItem('ListaPropriedades',JSON.stringify(this.listaPropriedades))
  }

  editarPropriedade(propriedade : Propriedade) {
    propriedade.modalEdit = true;
  }

  editValorPropriedade(propriedade : Propriedade) {
    if(this.novoNome != null) {
      propriedade.nomePropriedade = this.novoNome;
    }
    if(this.novoTipo != null) {
      propriedade.tipoPropriedade = this.novoTipo;
    }
  
    propriedade.modalEdit = false;
    
    localStorage.setItem('ListaPropriedades', JSON.stringify(this.listaPropriedades));
  }

  

}
