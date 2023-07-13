import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../../services/user.service';
import { User } from "../../../types/User";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  //INPUT PROPERTY TO RECIEBE ALL THE USERS FROM PARENT
  @Input() users: User[] = [];

  // OUTPUT PROPERTY TO EMIT WHEN DELETE USER
  @Output() emitDelete: EventEmitter<User> = new EventEmitter<User>();

  delete(user: User) {
    this.emitDelete.emit(user);
  }
}
