import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.component.html',
  styleUrls: ['./propriedade.component.css']
})
export class PropriedadeComponent implements OnInit {

  propriedadesGeral: String[] = [];
  categoriasGeral : String[] = [];
  tipoDado: string;
  propriedadeNova: string;

  constructor() {}

  @Output() clicouFecharModal = new EventEmitter();

  @Output() clicouCadastrarTipo = new EventEmitter();

  ngOnInit() {
    this.categoriasGeral = JSON.parse(localStorage.getItem("CategoriasGeral"))

    if (JSON.parse(localStorage.getItem("PropriedadesGeral")) != null) {
      this.propriedadesGeral = JSON.parse(
        localStorage.getItem("PropriedadesGeral")
      );
    }
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

  cadastrarTipo(): void {
    this.propriedadesGeral.push(this.propriedadeNova)

    localStorage.setItem(
      "PropriedadesGeral",
      JSON.stringify(this.propriedadesGeral)
    )

    this.propriedadeNova = "";
    this.tipoDado = "";
 
  }

}
