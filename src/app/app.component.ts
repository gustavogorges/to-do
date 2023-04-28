import { Component } from '@angular/core';

interface Tarefa {
  nomeTarefa:string;
  classeTarefa:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tarefas : Tarefa[] = [];
  
  mostraInput: boolean = true;
  mostraTarefa: boolean = true;
  displayTarefa: string = "";

  tarefa:Tarefa = {
    nomeTarefa: "",
    classeTarefa: ""
  }

  esconderInput(): void{
    this.mostraInput = false;
  }

  mostrarInput(): void{
    this.mostraInput = true;
  }

  mostrarTarefa(): void {
    this.mostraTarefa= false;
  }

  cadastrarTarefa(): void{

    const tarefaList:Tarefa ={
      nomeTarefa: this.tarefa.nomeTarefa,
      classeTarefa: this.tarefa.classeTarefa
    }

    this.tarefas.push(tarefaList)
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas))
    console.log(this.tarefas)
    
    this.tarefa.nomeTarefa = "";
    
  
  }

  removerTarefa(indice:number):void {
    this.tarefas.splice(indice, 1)
  }

}
