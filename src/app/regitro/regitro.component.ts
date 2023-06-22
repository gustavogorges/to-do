import { Component, OnInit } from "@angular/core";
import { callLifecycleHooksChildrenFirst } from "@angular/core/src/view/provider";
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'

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

  

  ngOnInit() {
    
  }
}
