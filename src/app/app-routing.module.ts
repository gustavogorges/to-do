import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { RegitroComponent } from "./regitro/regitro.component";
import { ModalComponent } from "./modal/modal.component";
import { registerContentQuery } from "@angular/core/src/render3/instructions";
import { PropriedadeComponent } from "./propriedade/propriedade.component";
import { TelaLoginComponent } from "./tela-login/tela-login.component";

const rotas: Route[] = [
  {
    path: "registroTarefa",
    component: RegitroComponent,
  },
  {
    path: "novaCategoria",
    component: ModalComponent,
  },
  {
    path: "telaLogin",
    component: RegitroComponent,
  },
  {
    path: "",
    component: RegitroComponent,
  },
  {
    path: "propriedades",
    component: PropriedadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
