import { Component, OnInit } from "@angular/core";

interface Tarefa {
  nomeTarefa: string;
  classeTarefa: string;
  codigoTarefa: number;
}

@Component({
  selector: "app-regitro",
  templateUrl: "./regitro.component.html",
  styleUrls: ["./regitro.component.css"],
})
export class RegitroComponent implements OnInit {
  tarefasGeral: Tarefa[] = [];
  categoriasGeral: String[] = [];
  coresGeral: String[] = [];

  mostraInput: boolean = true;
  mostraTarefa: boolean = true;
  displayTarefa: string = "";
  tipoTarefa: string;

  mostraModal: boolean = false;
  static mostraModal: boolean;

  ngOnInit() {
    this.categoriasGeral = JSON.parse(localStorage.getItem("CategoriasGeral"));
    this.coresGeral = JSON.parse(localStorage.getItem("CoresGeral"));

    if (localStorage.getItem("TarefasGeral") != null) {
      this.tarefasGeral = JSON.parse(localStorage.getItem("TarefasGeral"));
    }
  }

  tarefa: Tarefa = {
    nomeTarefa: "",
    classeTarefa: "",
    codigoTarefa: 0,
  };

  removerClasse(indice: number): void {
    this.categoriasGeral.splice(indice, 1);
    this.coresGeral.splice(indice,1);
    localStorage.setItem(
      "CategoriasGeral",
      JSON.stringify(this.categoriasGeral)
    );
    localStorage.setItem(
      "CoresGeral",
      JSON.stringify(this.coresGeral)
    );
  }

  esconderInput(): void {
    this.mostraInput = false;
    console.log(this.mostraInput);
  }

  mostrarInput(): void {
    this.mostraInput = true;
    console.log(this.mostraInput);
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

    this.tarefasGeral.push(tarefaList);
    console.log(tarefaList.classeTarefa);
    console.log(this.categoriasGeral);
    console.log(this.tarefasGeral);

    localStorage.setItem("TarefasGeral", JSON.stringify(this.tarefasGeral));
    localStorage.setItem("Categorias", JSON.stringify(this.categoriasGeral));

    // if((this.coresGeral[this.tarefa.codigoTarefa] + 0.05) / (0.0 + 0.05) > (1.0 + 0.05) / (L + 0.05)  )

    this.tarefa.nomeTarefa = "";
  }

  mudarCategoria(indice: number, codigo: number) {
    localStorage.setItem("TarefasGeral", JSON.stringify(this.tarefasGeral));
  }

  removerTarefa(indice: number): void {
    this.tarefasGeral.splice(indice, 1);
    localStorage.setItem("TarefasGeral", JSON.stringify(this.tarefasGeral));
  }

  mostrarModal(): void {
    this.mostraModal = true;
  }

  esconderModal(): void {
    this.mostraModal = false;
  }

  novoTipoTarefa(string: string): void {
    console.log(this.categoriasGeral);
    this.categoriasGeral.push(string);
  }

  testeCor(cor: string):void {

  }
}
