import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService
    , private router: Router
    , private auth: AuthService) { }

  ngOnInit(): void {
    this.userService.logout().subscribe(data => {
      if(data.status) {
        this.router.navigate(['/']);
        this.auth.setLoggedIn(false);
      }
      else window.alert('Something bad happened');
    });
  }

}
