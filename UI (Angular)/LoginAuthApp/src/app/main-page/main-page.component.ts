import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MiddlemanService } from '../middleman.service';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnDestroy {
  addUserForm: FormGroup
  deleteUserForm: FormGroup
  users: Observable<string[]> // idk how else to define this. its 
  showUsers: boolean = true
  addUserSub?: Subscription

  constructor(private middleman: MiddlemanService) {
    this.addUserForm = new FormGroup({
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
    })

    this.deleteUserForm = new FormGroup({
       username: new FormControl('',Validators.required)
    })

    this.users = this.middleman.getAllUsers()
  }

  addUserFormSubmit() {  
    // Yeah i dont have a specific message for email being wrong but whatever
    if(this.addUserForm.invalid) {
        alert("Form Invalid. All fields must be filled and the email field needs to contain an email.")
        return;
    }

    this.addUserSub = this.middleman.addUser(this.addUserForm.value['username'],this.addUserForm.value['email'],this.addUserForm.value['password']).subscribe({
      next: (value) => {
        alert("User Succesfully created!")
        this.users = this.middleman.getAllUsers()
      },
      error: (value) => {
        alert("There already exists a user with that username. Please pick another.")
      }
    })
  }

  deleteUserFormSubmit() {
    if(this.deleteUserForm.invalid) {
      alert("Please fill the username field.")
      return;
    }

    this.middleman.deleteUser(this.deleteUserForm.controls['username'].value).subscribe({
      next: (value) => {
        alert("Succesfully deleted user.")
        this.users = this.middleman.getAllUsers()
      },
      error: (value) => {
        alert("The user you entered most likely doesn't exist.");
      }
    })
  }

  userShowToggle() {
    this.showUsers = !this.showUsers
  }

  ngOnDestroy(): void {
      this.addUserSub?.unsubscribe()
  }


  get showUsersButtonText() {
    return this.showUsers ? "Hide Users" : "Show Users"
  }
}
