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
  ngOnInit(): void {
    
  }
  

}
