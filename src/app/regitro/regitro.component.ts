import { Component, OnInit } from "@angular/core";
import { callLifecycleHooksChildrenFirst } from "@angular/core/src/view/provider";
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'

interface Tarefa {
  nomeTarefa : string;
  propriedade : string[] ;
  click : boolean;
  draggable : boolean ;
  clickPropriedades : boolean ;
  modalEditar : boolean;
  listaPropriedades : Propriedade[]
}

interface Propriedade {
  nomePropriedade : string,
  tipoPropriedade : string,
  valorPropriedade ?: string
}

@Component({
  selector: "app-regitro",
  templateUrl: "./regitro.component.html",
  styleUrls: ["./regitro.component.css"],
})
export class RegitroComponent implements OnInit {

  constructor(
    private UserRepository: UserRepository
    ) {
      
  }

  selectedValue : String;

  ngOnInit(): void {
      this.selectedValue = JSON.parse(localStorage.getItem('selectedValue'))
      console.log(this.selectedValue)
    
  }

}
