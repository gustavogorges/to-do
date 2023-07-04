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

  private users: User[] = [];
  public user : User | undefined;

  constructor(
    private UserRepository: UserRepository
  ) {
    UserRepository.getUsers().subscribe({
      next: (value) => {
        console.log(value);
        this.users = value;
      },
    });


  }


}
