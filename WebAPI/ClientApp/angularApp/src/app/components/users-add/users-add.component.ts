import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../../types/User';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.scss']
})
export class UsersAddComponent{

  public users: User[] = []
  public userForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    isAdmin: new FormControl(false),
  });

  // PROPERTY TO MANAGE THE SELECTOR TYPE WHICH IS COMMING FROM BACKEND
  @Input() selectorType?: any;

  //PROPERTY TO EMIT CHANGES WHEN ADD NEW USER
  @Output() emitAdd: EventEmitter<User> = new EventEmitter<User>();


  addUser() {
    this.emitAdd.emit(this.userForm.value as User);
  }
}
