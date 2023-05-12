import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  categoriasGeral: String[] = [];
  tarefaTipo : string ;

  constructor() { }

  @Output() clicouFecharModal = new EventEmitter();

  @Output() clicouCadastrarTipo = new EventEmitter();

  ngOnInit() {
    if(JSON.parse(localStorage.getItem("CategoriasGeral")) != null){
      this.categoriasGeral = JSON.parse(localStorage.getItem("CategoriasGeral"))
    }
  }

  esconderModal() : void {
    this.clicouFecharModal.emit()
  }

  cadastrarTipo() : void {
    console.log(this.categoriasGeral, this.tarefaTipo);
    this.categoriasGeral.push(this.tarefaTipo)
    console.log(this.categoriasGeral)
    localStorage.setItem("CategoriasGeral", JSON.stringify(this.categoriasGeral));
  }

}
