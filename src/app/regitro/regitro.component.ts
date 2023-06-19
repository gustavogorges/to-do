import { Component, OnInit } from "@angular/core";
import { callLifecycleHooksChildrenFirst } from "@angular/core/src/view/provider";

interface Tarefa {
  nomeTarefa: string;
  classeTarefa: string;
  codigoTarefa: number;
  propriedade : string ;
  click : boolean
}

interface Propriedade {
  nomePropriedade: string;
  tipoDado: string;
  indicePropriedade: number;
  valorPropriedade: String;
}

@Component({
  selector: "app-regitro",
  templateUrl: "./regitro.component.html",
  styleUrls: ["./regitro.component.css"],
})
export class RegitroComponent implements OnInit {

  tarefasGeral: Tarefa[] = [];
  categoriasGeral: string[] = [];
  coresGeral: string[] = [];
  dragTarefa: Tarefa[] = [];
  propriedadesGeral: Propriedade[] = [];

  categoriaDrop: string;
  tarefaDrag: Tarefa;
  click: boolean = false;
  propriedadeTexto: string;

  mostraInput: boolean = true;
  mostraTarefa: boolean = true;
  displayTarefa: string = "";
  tipoTarefa: string;

  mostraModal: boolean = false;
  static mostraModal: boolean;

  ngOnInit() {
    this.propriedadesGeral = JSON.parse(localStorage.getItem("PropriedadesGeral"))
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
    click: false,
    propriedade : ""
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
      click: false,
      propriedade : this.tarefa.propriedade
    };

    this.tarefasGeral.push(tarefaList);

    localStorage.setItem("TarefasGeral", JSON.stringify(this.tarefasGeral));
    localStorage.setItem("Categorias", JSON.stringify(this.categoriasGeral));


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

  allowDrop(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  
  indexDrag: number;

  getIndex(event: Event, index: number) : void {
    event.preventDefault();
    this.indexDrag = index;
  }

  dragstart(tarefa: Tarefa) {
    this.tarefaDrag = tarefa;
  }

  
  dragoverCategoria(categoria: string, event: Event) : void {
    event.preventDefault();
    this.categoriaDrop = categoria;
  }

  dropCategoria(event: Event) {
    event.preventDefault();
    this.tarefaDrag.classeTarefa = this.categoriaDrop;


    this.tarefasGeral.splice(this.tarefasGeral.indexOf(this.tarefaDrag), 1);
    this.tarefasGeral.splice(this.indexDrag, 0, this.tarefaDrag);
  }

  Click(tarefa : Tarefa) : void {
      this.tarefasGeral.forEach(tarefaFor => {
        if(tarefaFor.nomeTarefa == tarefa.nomeTarefa) {
        if(tarefa.click == false) {
          tarefa.click = true;
        }
        else {
          tarefa.click = false;
        }
       } 
      });
      
  }

  cadastroValorPropriedade(propriedade : string, indice : number, tarefa : Tarefa) : void {
    console.log(tarefa)
    this.tarefa.propriedade = propriedade;
    this.tarefasGeral.splice(indice,0,tarefa)
    localStorage.setItem('TarefasGeral', JSON.stringify(this.tarefasGeral))
  }

}
