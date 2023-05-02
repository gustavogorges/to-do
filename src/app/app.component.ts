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
  session: any;
  tarefas: Tarefa[] = [];

  mostraInput: boolean = true;
  mostraTarefa: boolean = true;
  displayTarefa: string = "";

  ngOnInit() {
    if (localStorage.getItem("Tarefas") != null) {
      this.tarefas = JSON.parse(localStorage.getItem("Tarefas"));
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

    console.log(tarefaList);

    this.tarefas.push(tarefaList);

    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));

    // let tarefasInit: any = localStorage.getItem("Tarefas");
    // this.session = JSON.parse(tarefasInit);
    // console.log(this.session);

    // localStorage.setItem(
    //   "TarefaClasse",
    //   JSON.stringify(this.tarefa.classeTarefa)
    // );
    // localStorage.setItem(
    //   "TarefaCodigo",
    //   JSON.stringify(this.tarefa.codigoTarefa)
    // );
    console.log(this.tarefas);

    this.tarefa.nomeTarefa = "";
  }

  removerTarefa(indice: number): void {
    this.tarefas.splice(indice, 1);
    localStorage.setItem("Tarefas", JSON.stringify(this.tarefas));
  }
}
