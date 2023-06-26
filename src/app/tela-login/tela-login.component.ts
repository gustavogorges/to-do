import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'
import { AuthService } from 'src/service/auth.service';



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
    private authService: AuthService,
    private router: Router
  ) { 
   
  }

  username : string;
  password : string;

  
  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        // Once the login is successful, retrieve permissions and perform further actions
        this.authService.getPermissions().subscribe(
          permissions => {
            // Handle permissions, e.g., store them in a variable or update component state
            console.log('User Permissions:', permissions);
          }
        );
        this.router.navigate(['/registroTarefa'])
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }

  ngOnInit() {
  }

}