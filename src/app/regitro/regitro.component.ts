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

  private userId : string = ""
  private users: User[] = [];
  public user : User | undefined;

  constructor(
    private UserRepository: UserRepository
    ) {
      
  }



  cadastroTarefaBoolean : boolean = false;
  tarefasGeral : Tarefa[] = [];
  propriedadesGeral : Propriedade[] = [];


  selectValue : string;
 


  tarefa: Tarefa = {
    nomeTarefa: "",
    click: false,
    propriedade : [],
    draggable : false,
    clickPropriedades : false,
    modalEditar : false,
    listaPropriedades : []
  };

  propriedade: Propriedade = {
    nomePropriedade: "",
    valorPropriedade: "",
    tipoPropriedade: ""
  }

  propValor : string;

  ngOnInit() {

    if(localStorage.getItem('ListaTarefas') != null) {
      this.tarefasGeral = JSON.parse(localStorage.getItem('ListaTarefas'));
    }

    if(localStorage.getItem('ListaPropriedades') != null) {
      this.propriedadesGeral = JSON.parse(localStorage.getItem('ListaPropriedades'));
    }
    
    this.usuarioLogado = JSON.parse(localStorage.getItem('UsuarioLogado'));

    //Booleans
   this.cardAddBoolean = this.usuarioLogado.cardAdd
   this.cardEditBoolean = this.usuarioLogado.cardEdit
   this.cardMoveBoolean = this.usuarioLogado.cardMove
   this.cardRemoveBoolean = this.usuarioLogado.cardRemove

   this.propertieAddBoolean = this.usuarioLogado.propertieAdd
   this.propertieEditBoolean = this.usuarioLogado.propertieEdit
   this.propertieRemoveBoolean = this.usuarioLogado.propertieRemove

  }
  
  cardAddBoolean : boolean;
  cardEditBoolean : boolean;
  cardMoveBoolean : boolean;
  cardRemoveBoolean : boolean;

  propertieAddBoolean : boolean;
  propertieEditBoolean : boolean;
  propertieRemoveBoolean : boolean;

  usuarioLogado : User;

    


  clickProp(tarefa : Tarefa) : void {
    console.log(tarefa.clickPropriedades)
    if(tarefa.clickPropriedades == false){
      tarefa.clickPropriedades = true;
    } else {
      tarefa.clickPropriedades = false;
    }
  }

  clickEdit(tarefa : Tarefa) : void {
    
    if(tarefa.modalEditar == false){
      tarefa.modalEditar = true;
    } else if(tarefa.modalEditar == true) {
      tarefa.modalEditar = false;
    }

  }


  cadastrarTarefaButton() : void {
    console.log(this.selectValue)
    console.log(this.cadastroTarefa)
    if(this.cadastroTarefaBoolean == false) {
      this.cadastroTarefaBoolean = true;
      console.log('true')
    } else {
      this.cadastroTarefaBoolean = false;
    }
  }

  consoleLog() : void {
    console.log(this.selectValue);
  }

  adicionarPropriedade(tarefa : Tarefa, indice : number, propriedade : Propriedade) : void {
    tarefa.modalEditar = false;

    const novaPropriedade : Propriedade = {
      nomePropriedade : propriedade.nomePropriedade,
      valorPropriedade : this.propValor,
      tipoPropriedade : propriedade.tipoPropriedade
    }

    tarefa.listaPropriedades.push(novaPropriedade)

    localStorage.setItem('ListaTarefas', JSON.stringify(this.tarefasGeral))
    
    this.propValor = '';
  }

  cadastroTarefa() : void {
    this.cadastroTarefaBoolean = false;

    const tarefaItem : Tarefa = {
      nomeTarefa : this.tarefa.nomeTarefa,
      propriedade : this.tarefa.propriedade,
      click : this.tarefa.click,
      draggable : this.tarefa.draggable,
      clickPropriedades : this.tarefa.clickPropriedades,
      modalEditar : this.tarefa.modalEditar,
      listaPropriedades : this.tarefa.listaPropriedades
    }


    this.tarefasGeral.push(tarefaItem);
    localStorage.setItem('ListaTarefas', JSON.stringify(this.tarefasGeral));
    this.tarefa.nomeTarefa = '';
  }

  apagarPropriedade(tarefa : Tarefa, propriedade : Propriedade) {
    tarefa.listaPropriedades.splice(tarefa.listaPropriedades.indexOf(propriedade),1);
    localStorage.setItem('ListaTarefas', JSON.stringify(this.tarefasGeral));
  }

  clickRemover(tarefa : Tarefa) {
    this.tarefasGeral.splice(this.tarefasGeral.indexOf(tarefa),1);
    localStorage.setItem('ListaTarefas',JSON.stringify(this.tarefasGeral))
  }
}
