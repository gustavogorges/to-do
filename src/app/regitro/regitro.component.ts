import { Component, OnInit } from '@angular/core';

interface Tarefa {
  nomeTarefa: string;
  classeTarefa: string;
  codigoTarefa: number;
}

@Component({
  selector: 'app-regitro',
  templateUrl: './regitro.component.html',
  styleUrls: ['./regitro.component.css']
})
export class RegitroComponent implements OnInit {
  tarefasGeral: Tarefa[] = [];
  categoriasGeral: String[] = [];

  mostraInput: boolean = true;
  mostraTarefa: boolean = true;
  displayTarefa: string = "";
  tipoTarefa: string;

  mostraModal: boolean = false;
  static mostraModal: boolean;

  ngOnInit() {
    
      this.categoriasGeral = JSON.parse(localStorage.getItem("CategoriasGeral"))
    
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
    console.log(this.mostraInput)
  }

  mostrarInput(): void {
    this.mostraInput = true;
    console.log(this.mostraInput)
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
    console.log(tarefaList.classeTarefa)
    console.log(this.categoriasGeral)
    console.log(this.tarefasGeral)

    localStorage.setItem("TarefasGeral", JSON.stringify(this.tarefasGeral));
    localStorage.setItem("Categorias", JSON.stringify(this.categoriasGeral));
    this.tarefa.nomeTarefa = "";
  }

  
  mudarCategoria(indice : number, codigo : number) {
    localStorage.setItem("TarefasGeral", JSON.stringify(this.tarefasGeral));

  }

  removerTarefa(indice : number) : void {
    this.tarefasGeral.splice(indice , 1);
    localStorage.setItem("TarefasGeral", JSON.stringify(this.tarefasGeral));
  }

  mostrarModal() : void {
    this.mostraModal = true;
  }

  esconderModal() : void {
    this.mostraModal = false;
  }

  novoTipoTarefa(string: string) : void {
    console.log(this.categoriasGeral)
    this.categoriasGeral.push(string);
  }

}
