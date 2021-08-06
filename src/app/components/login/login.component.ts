import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {User} from "../../interface";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor( public auth: AuthService) { }

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }
  submit(){
    console.log(this.form)
    if (this.form.invalid){
      return
    }
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.auth.login(user)
    this.form.reset()

  }

}
