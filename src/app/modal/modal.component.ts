import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  tarefaTipo : string ;

  constructor() { }

  @Output() clicouFecharModal = new EventEmitter();

  @Output() clicouCadastrarTipo = new EventEmitter();

  ngOnInit() {
  }

  esconderModal() : void {
    this.clicouFecharModal.emit()
  }

  cadastrarTipo() : void {
    this.clicouCadastrarTipo.emit(this.tarefaTipo);
  }

}
