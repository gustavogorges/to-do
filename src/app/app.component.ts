import { Component } from '@angular/core';
import { User } from 'src/models/users/user';
import { UserRepository } from 'src/repositories/user.repository'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do';

  private userId : string = "joao.silva"
  private users: User[] = [];
  public user : User | undefined;

  constructor(
    private UserRepository: UserRepository
  ) {
    this.users = this.UserRepository.getUsers();
    this.user = this.getUsuarioLogado();
    console.log(this.user)
  }

  private getUsuarioLogado(): User | undefined {
    return this.users.find((user) => {
      return user.id === this.userId;
    });
  }
}
