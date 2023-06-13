import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { RegitroComponent } from './regitro/regitro.component';
import { NavComponent } from './nav/nav.component';
import { PropriedadeComponent } from './propriedade/propriedade.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    RegitroComponent,
    NavComponent,
    PropriedadeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
