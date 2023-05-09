import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { TipoTarefaComponent } from './tipo-tarefa/tipo-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    TarefaComponent,
    TipoTarefaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
