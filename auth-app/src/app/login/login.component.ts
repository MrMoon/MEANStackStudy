import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

  }

  loginUser(event) : void {
    event.preventDefault();
    const target = event.target;
    this.auth.getUserDetails(target.querySelector('#txtEmail').value , target.querySelector('#txtPassword').value).subscribe(data => {
      if(data.success) {
        window.alert("Hello Admin");
      } else {
        window.alert(data.message);
      }
    });
  }

}
