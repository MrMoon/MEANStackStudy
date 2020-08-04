import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string = "";

  constructor(private userService: UserService , private router: Router) { }

  ngOnInit(): void {
    this.userService.getName().subscribe(data => {
      if(data.success) this.name = data.message;
      else router.navigate['logout'];
    })
  }

}
