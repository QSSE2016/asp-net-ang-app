import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginAuthApp';

  form: FormGroup

  constructor() {
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

    console.log(this.form.value)
  }
}
