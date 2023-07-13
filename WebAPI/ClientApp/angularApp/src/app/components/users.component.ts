import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterDataService } from '../../services/master-data.service';
import { UserService } from '../../services/user.service';
import { User } from '../../types/User';

@Component({
  selector: 'app-root-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = []
  public selectorType?: any;

  constructor(private userService: UserService, private masterData: MasterDataService) { }

  ngOnInit(): void {
    this.getUsers();
    this.masterData.getIsAdminSelection().subscribe((data) => {
      this.selectorType = data
    });
  }

  //MOVED THIS CALL SERVICE TO SEPARATE METHOD IN ORDER TO CALL IT FROM addUser deleteUser METHODS
  getUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addUser(user: User): void {
    this.userService.addUser(user).subscribe({
      next: (data) => {
        console.debug(data);
        this.getUsers();
      },
      error: (e) => {
        console.log(e);
        alert("There was an error adding the user.")
      },

    });
  }

  //ADDED THIS METHODS HERE TO HAVE ALL THE CRUD IN ONE PLACE AND KEEP THE CODE CLEAN
  deleteUser(user: User): void {
    this.userService.deleteUser(user.id).subscribe({
      next: (data) => {
        console.debug(data);
        this.getUsers();
      },
      error: (e) => {
        console.log(e);
        alert("There was an error deleting the user.")
      },

    });
  }
}
