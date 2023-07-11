import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { RegitroComponent } from "./regitro/regitro.component";
import { ModalComponent } from "./modal/modal.component";
import { registerContentQuery } from "@angular/core/src/render3/instructions";
import { PropriedadeComponent } from "./propriedade/propriedade.component";
import { TelaLoginComponent } from "./tela-login/tela-login.component";
import { TelaCadastroComponent } from "./tela-cadastro/tela-cadastro.component";
import { AuthGuardService } from "src/services/auth-guard.service";
import { VisualizacaoPadraoComponent } from "./visualizacao-padrao/visualizacao-padrao.component";
import { VisualizacaoPropriedadesComponent } from "./visualizacao-propriedades/visualizacao-propriedades.component";

const rotas: Route[] = [
  {
    path: "registroTarefa",
    component: RegitroComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "novaCategoria",
    component: ModalComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "telaLogin",
    component: TelaLoginComponent,
  },
  {
    path: "",
    component: TelaCadastroComponent,
  },
  {
    path: "propriedades",
    component: PropriedadeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "telaCadastro",
    component: TelaCadastroComponent
  },
  {
    path: "telaPadrão",
    component: VisualizacaoPadraoComponent
  },
  {
    path: "telaCategorias",
    component: VisualizacaoPropriedadesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
