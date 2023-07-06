import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'
import { UserService } from 'src/services/user.service';



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
    private userService: UserService,
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

    this.userRepository.getUserById(id).subscribe(
      (user: User) => {
        if(user.password == password) {
          localStorage.setItem('UsuarioLogado', JSON.stringify(user))
          this.userService.setLoggedUser(user);
          this.router.navigate(['/registroTarefa'])
        }
      },
      (error : any) => {
        console.log(error)
      }
    )

  }

}
