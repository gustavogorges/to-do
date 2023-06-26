import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'

interface Propriedade {
  nomePropriedade : string,
  tipoPropriedade : string,
  valorPropriedade ?: string
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
    if(this.listaPropriedades == null) {
      this.listaPropriedades = JSON.parse(localStorage.getItem('ListaPropriedades'))
    }
  }

  listaPropriedades : Propriedade[] = [];
  nomePropriedade : string;
  tipoPropriedade : string;

  propriedade : Propriedade = {
    nomePropriedade : null,
    tipoPropriedade : null,
    valorPropriedade : null
  }

  cadastraPropriedade() : void {
    const novaPropriedade : Propriedade = {
      nomePropriedade : this.propriedade.nomePropriedade,
      tipoPropriedade : this.propriedade.tipoPropriedade
    }

    this.listaPropriedades.push(novaPropriedade);
    
    localStorage.setItem('ListaPropriedades', JSON.stringify(this.listaPropriedades));

    // zerar campos dos inputs
    this.propriedade.tipoPropriedade = null;
    this.propriedade.nomePropriedade = null
  }

  

}
