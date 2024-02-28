import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnDestroy {
  @Input() username: string = ''

  addUserForm: FormGroup
  users: string[] = ['1','asdbas','12u3h21']

  constructor() {
    this.addUserForm = new FormGroup({
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
    })
  }

  addUserFormSubmit() {  
    
    // Yeah i dont have a specific message for email being wrong but whatever
    if(this.addUserForm.invalid) {
        alert("Please fill out all the fields.")
        return;
    }

    console.log(this.addUserForm.value)
  }

  ngOnDestroy(): void {
      
  }
}
