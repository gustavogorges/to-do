import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Propriedade {
  nomePropriedade: string;
  tipoDado: string;
  indicePropriedade: number;
  valorPropriedade: String;
}

@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.component.html',
  styleUrls: ['./propriedade.component.css']
})
export class PropriedadeComponent implements OnInit {

  propriedadesGeral: Propriedade[] = [];
  categoriasGeral : String[] = [];
  tipoDado: string;

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

  propriedade: Propriedade = {
    nomePropriedade: "",
    tipoDado: "",
    indicePropriedade: 0,
    valorPropriedade: ""
  };

  cadastrarTipo(): void {
    
    const propriedadeNova : Propriedade  = {
      nomePropriedade : this.propriedade.nomePropriedade,
      tipoDado : this.propriedade.tipoDado,
      indicePropriedade : this.propriedadesGeral.length,
      valorPropriedade : this.propriedade.valorPropriedade
    }
    
console.log(propriedadeNova.indicePropriedade)

    this.propriedadesGeral.push(propriedadeNova)

    localStorage.setItem(
      "PropriedadesGeral",
      JSON.stringify(this.propriedadesGeral)
    )

 
  }

}
