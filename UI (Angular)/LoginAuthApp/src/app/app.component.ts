import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MiddlemanService } from './middleman.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'LoginAuthApp';

  form: FormGroup
  loginCheckSub?: Subscription

  constructor(private middleman: MiddlemanService) {
    this.form = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  submit() {
    if(this.form.invalid) {
       alert("Please fill all the fields.")
       return
    }

    this.loginCheckSub = this.middleman.checkIfUserExists(this.form.value['username'],this.form.value['password']).subscribe({
      next: (value) => {
        console.log("SUCCESS: ",value)
      },
      error: (value) => {
        alert("The credentials you entered do not match any account. Please enter valid credentials")
      }
    })
  }

  ngOnDestroy(): void {
      this.loginCheckSub?.unsubscribe()
  }
}
