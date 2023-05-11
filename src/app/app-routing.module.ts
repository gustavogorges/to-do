import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ModalComponent } from "./modal/modal.component";
import { TipoTarefaComponent } from "./tipo-tarefa/tipo-tarefa.component";

const rotas: Route[] = [
    {
        path: 'categoria',
        component: AppComponent
    },
    {
        path: 'modal',
        component: ModalComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class AppRoutingModule{}