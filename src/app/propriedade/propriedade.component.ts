import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'

@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.component.html',
  styleUrls: ['./propriedade.component.css']
})
export class PropriedadeComponent implements OnInit {

  private userId : string = ""
  private users: User[] = [];
  public user : User | undefined;

  constructor(
    private UserRepository: UserRepository
    ) {} 
  

  ngOnInit() {
    
  }

  

}
