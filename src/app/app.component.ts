import { Component, OnInit } from "@angular/core";

interface Tarefa {
  nomeTarefa: string;
  classeTarefa: string;
  codigoTarefa: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  tarefasGeral: Tarefa[] = [];

  mostraInput: boolean = true;
  mostraTarefa: boolean = true;
  displayTarefa: string = "";

  ngOnInit() {
    if (localStorage.getItem("TarefasGeral") != null) {
      this.tarefasGeral = JSON.parse(localStorage.getItem("TarefasGeral"));
    }
  }

  tarefa: Tarefa = {
    nomeTarefa: "",
    classeTarefa: "",
    codigoTarefa: 0,
  };

  esconderInput(): void {
    this.mostraInput = false;
  }

  mostrarInput(): void {
    this.mostraInput = true;
  }

  mostrarTarefa(): void {
    this.mostraTarefa = false;
  }

  cadastrarTarefa(): void {
    const tarefaList: Tarefa = {
      nomeTarefa: this.tarefa.nomeTarefa,
      classeTarefa: this.tarefa.classeTarefa,
      codigoTarefa: this.tarefa.codigoTarefa++,
    };

    this.tarefasGeral.push(tarefaList)

    localStorage.setItem("TarefasGeral", JSON.stringify(this.tarefasGeral));
    this.tarefa.nomeTarefa = "";
  }

  
  mudarCategoria(indice : number, codigo : number) {
    localStorage.setItem("TarefasGeral", JSON.stringify(this.tarefasGeral));

  }

  removerTarefa(indice : number) : void {
    this.tarefasGeral.splice(indice , 1);
    localStorage.setItem("TarefasGeral", JSON.stringify(this.tarefasGeral));
  }

  modalNovaTarefa() : void {
    
  }
}
