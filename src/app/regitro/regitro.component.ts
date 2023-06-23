import { Component, OnInit } from "@angular/core";
import { callLifecycleHooksChildrenFirst } from "@angular/core/src/view/provider";
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'

interface Tarefa {
  nomeTarefa : string;
  propriedade : string[] ;
  click : boolean;
  draggable : boolean ;
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


  tarefa: Tarefa = {
    nomeTarefa: "",
    click: false,
    propriedade : [],
    draggable : false
  };

  ngOnInit() {
   
  }

  cadastrarTarefaButton() : void {
    console.log(this.cadastroTarefa)
    if(this.cadastroTarefaBoolean == false) {
      this.cadastroTarefaBoolean = true;
      console.log('true')
    } else {
      this.cadastroTarefaBoolean = false;
    }
  }

  cadastroTarefa() : void {
    this.cadastroTarefaBoolean = false;

    const tarefaItem : Tarefa = {
      nomeTarefa : this.tarefa.nomeTarefa,
      propriedade : this.tarefa.propriedade,
      click : this.tarefa.click,
      draggable : this.tarefa.draggable
    }

    console.log(this.tarefasGeral)
    this.tarefasGeral.push(tarefaItem);
  }
}
