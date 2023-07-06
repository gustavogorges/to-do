import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { RegitroComponent } from './regitro/regitro.component';
import { NavComponent } from './nav/nav.component';
import { PropriedadeComponent } from './propriedade/propriedade.component';
import { UserRepository } from 'src/repositories/user.repository';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HttpClientModule } from '@angular/common/http';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { UserService } from 'src/services/user.service';
import { AuthGuardService } from 'src/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    RegitroComponent,
    NavComponent,
    PropriedadeComponent,
    TelaLoginComponent,
    TelaCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserRepository,
    UserService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
