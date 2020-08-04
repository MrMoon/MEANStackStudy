import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(event) : void {
    event.preventDefault();
    const target = event.target;
    const name = target.querySelector('#txtName');
    const email = target.querySelector('#txtEmail');
    const password = target.querySelector('#txtPassword');
    const confirmPassword = target.querySelector('txtConfirmPassword');

    this.auth.registerUser(name.value , email.value , password.value).subscribe(data => {
      if(data.success) {
        this.router.navigate(['dashboard']);
      }
    });
  }
}
