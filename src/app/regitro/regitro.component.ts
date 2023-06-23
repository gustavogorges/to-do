import { Component, OnInit } from "@angular/core";
import { callLifecycleHooksChildrenFirst } from "@angular/core/src/view/provider";
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'

interface Tarefa {
  nomeTarefa : string;
}

@Component({
  selector: "app-regitro",
  templateUrl: "./regitro.component.html",
  styleUrls: ["./regitro.component.css"],
})
export class RegitroComponent implements OnInit {

  private userId : string = ""
  private users: User[] = [];
  public user : User | undefined;

  constructor(
    private UserRepository: UserRepository
    ) {
      
  }

  cadastroTarefa : boolean = false;

  

  ngOnInit() {
   
  }

  cadastrarTarefa() : void {
    console.log(this.cadastroTarefa)
    if(this.cadastroTarefa == false) {
      this.cadastroTarefa = true;
      console.log('true')
    } else {
      this.cadastroTarefa = false;
    }
  }
}
