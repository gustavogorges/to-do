import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'

interface Propriedade {
  nomePropriedade: string;
  tipoDado: string;
  indicePropriedade: number;
  valorPropriedade: String;
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
  

  propriedadesGeral: Propriedade[] = [];
  categoriasGeral : String[] = [];
  tipoDado: string;

  propertieAddBoolean : boolean = true;
  propertieEditBoolean : boolean = true;
  propertieMoveBoolean : boolean = true;
  propertieRemoveBoolean : boolean = true;


  @Output() clicouFecharModal = new EventEmitter();

  @Output() clicouCadastrarTipo = new EventEmitter();

  ngOnInit() {
    this.categoriasGeral = JSON.parse(localStorage.getItem("CategoriasGeral"))

    if (JSON.parse(localStorage.getItem("PropriedadesGeral")) != null) {
      this.propriedadesGeral = JSON.parse(
        localStorage.getItem("PropriedadesGeral")
      );
    }

    this.userId = localStorage.getItem('UsuarioLogado');

    this.users = this.UserRepository.getUsers();
    this.user = this.getUsuarioLogado();

    this.disabledAddPropertie();
    this.disabledRemovePropertie();
    this.disabledEditPropertie();
    this.disabledMovePropertie();
  

    console.log(this.user)
  }

  disabledAddPropertie() : void {
    console.log('entrou')
    this.user.propertiesPermissions.forEach(permission => {
      if(permission == 'Add') {
        this.propertieAddBoolean = false;
      }
    });
  }

  disabledRemovePropertie() : void {
    console.log('entrou')
    this.user.propertiesPermissions.forEach(permission => {
      if(permission == 'Remove') {
        this.propertieRemoveBoolean = false;
      }
    });
  }

  disabledEditPropertie() : void {
    this.user.propertiesPermissions.forEach(permission => {
      if(permission == 'Edit') {
        console.log('permissao de editar')
        this.propertieEditBoolean = false;
      }
    });
  }

  disabledMovePropertie() : void {
    console.log('entrou')
    this.user.propertiesPermissions.forEach(permission => {
      if(permission == 'Move') {
        this.propertieMoveBoolean = false;
      }
    });
  }

  removerClasse(indice: number): void {
    console.log(indice);
    this.propriedadesGeral.splice(indice, 1);
    localStorage.setItem(
      "PropriedadesGeral",
      JSON.stringify(this.propriedadesGeral)
    );
  }

  esconderModal(): void {
    this.clicouFecharModal.emit();
  }

  propriedade: Propriedade = {
    nomePropriedade: "",
    tipoDado: "",
    indicePropriedade: 0,
    valorPropriedade: ""
  };

  private getUsuarioLogado(): User | undefined {
    return this.users.find((user) => {
      return user.id === this.userId;
    });
  }

  cadastrarTipo(): void {
    
    const propriedadeNova : Propriedade  = {
      nomePropriedade : this.propriedade.nomePropriedade,
      tipoDado : this.propriedade.tipoDado,
      indicePropriedade : this.propriedadesGeral.length,
      valorPropriedade : this.propriedade.valorPropriedade
    }
    
console.log(propriedadeNova.indicePropriedade)

    this.propriedadesGeral.push(propriedadeNova)

    localStorage.setItem(
      "PropriedadesGeral",
      JSON.stringify(this.propriedadesGeral)
    )

 
  }

}
