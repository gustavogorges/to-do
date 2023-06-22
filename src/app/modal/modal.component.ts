import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AppComponent } from "../app.component";
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'


@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  categoriasGeral: String[] = [];
  coresGeral: String[] = [];
  tarefaTipo: string;
  tarefaCor: string;

  private userId : string = ""
  private users: User[] = [];
  public user : User | undefined;

  constructor(
    private UserRepository: UserRepository
    ) {} 
  


  @Output() clicouFecharModal = new EventEmitter();

  @Output() clicouCadastrarTipo = new EventEmitter();

  ngOnInit() {
    let cores:String[];
    cores = JSON.parse(localStorage.getItem("CoresGeral"));
    if( cores != null ){
      this.coresGeral = cores;
    }

    if (JSON.parse(localStorage.getItem("CategoriasGeral")) != null) {
      this.categoriasGeral = JSON.parse(
        localStorage.getItem("CategoriasGeral")
      );
    }

    this.userId = localStorage.getItem('UsuarioLogado');

    this.users = this.UserRepository.getUsers();
    this.user = this.getUsuarioLogado();

    console.log(this.user)
  }

  private getUsuarioLogado(): User | undefined {
    return this.users.find((user) => {
      return user.id === this.userId;
    });
  }

  removerClasse(indice: number): void {
    console.log(indice);
    this.categoriasGeral.splice(indice, 1);
    this.coresGeral.splice(indice,1);
    localStorage.setItem(
      "CategoriasGeral",
      JSON.stringify(this.categoriasGeral)
    );
    localStorage.setItem(
      "CoresGeral",
      JSON.stringify(this.coresGeral)
    );
  }

  esconderModal(): void {
    this.clicouFecharModal.emit();
  }

  cadastrarTipo(): void {
    this.coresGeral.push(this.tarefaCor);
    this.categoriasGeral.push(this.tarefaTipo);

    localStorage.setItem("CoresGeral", JSON.stringify(this.coresGeral));
    localStorage.setItem(
      "CategoriasGeral",
      JSON.stringify(this.categoriasGeral)
    );
    this.tarefaTipo = "";
    this.tarefaCor = "";

    
  }
}
