import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { users } from 'src/data/users';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private userCardPermissions: string[] = [];
  private userPropertiesPermissions: string[] = [];

  private userId : string = ""
  private users: User[] = [];
  public user : User | undefined;

  constructor(
    private UserRepository: UserRepository
    ) { 
      this.users = this.UserRepository.getUsers();
      this.user = this.getUsuarioLogado();
    }

    private getUsuarioLogado(): User | undefined {
      return this.users.find((user) => {
        return user.id === this.userId;
      });
    }
  

  login(username: string, password: string): Observable<boolean> {
    // Simulate an asynchronous login request
    return new Observable<boolean>(observer => {
      console.log("User: ", username)
      console.log("Senha: ", password)
      console.log("Users: ", this.users)
      // Perform authentication logic here
      // Example: Check username and password against a backend API
      this.user = verificaUsuario(username, password);
      console.log(this.user)
      if(this.user != null) {
        // Simulate a successful login
         this.isAuthenticated = true;
         this.userCardPermissions = this.user.cardPermissions;
        this.userPropertiesPermissions = this.user.propertiesPermissions;

         observer.next(true);
         observer.complete();
      }
     
    });
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userCardPermissions = [];
    this.userPropertiesPermissions = [];
  }

  getCardPermissions(): Observable<string[]> {
    // Simulate an asynchronous operation to retrieve permissions
    return of(this.userCardPermissions);
  }

  getPropertiesPermissons(): Observable<string[]> {
    // Simulate an asynchronous operation to retrieve permissions
    return of(this.userPropertiesPermissions);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}

function verificaUsuario(username:string, password:string):User {
  let usertest: User = {
    id : null,
    name: null,
    groups : null,
    cardPermissions : null,
    propertiesPermissions : null,
    senha : null
  };
  users.forEach(userReturned => {
    if(userReturned.id == username) {
      console.log("User ID: ", userReturned.id)
      console.log("Username: ", username)
      if(userReturned.senha == password) {
        console.log("senha: ", userReturned.senha)
        console.log(password);

        if(userReturned!= null) {
          usertest = userReturned
        }
      }
    }
  });
  console.log(usertest)
  return usertest;
}

