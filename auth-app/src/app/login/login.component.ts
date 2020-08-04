import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private auth: AuthService , private router: Router) { }

  ngOnInit(): void {

  }

  loginUser(event) : void {
    event.preventDefault();
    const target = event.target;
    this.auth.getUserDetails(target.querySelector('#txtEmail').value , target.querySelector('#txtPassword').value).subscribe(data => {
      if(data.success) {
        this.router.navigate(['dashboard']);
        this.auth.setLoggedIn(true);
      } else console.log(data.message);

    });
  }

}
