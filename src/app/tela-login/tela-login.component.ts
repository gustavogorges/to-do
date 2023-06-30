import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'



@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  private userId : string = ""
  private users: User[] = [];
  public user : User | undefined;

  constructor(
    private router: Router,
    private userRepository : UserRepository
  ) { 
   
  }
  ngOnInit(): void {
    
  }

  username : string;
  password : string;

  
  login(): void {
    const id : string = this.username;
    const password : string = this.password;

    this.userRepository.getUsers().subscribe(
      (value) =>{
        value.forEach(user => {
          if(user.id == id){
            if(user.password == password) {
              this.router.navigate(['/registroTarefa'])
            }
          }
        });
      }
    );

  }

}
