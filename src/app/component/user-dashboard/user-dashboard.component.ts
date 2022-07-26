import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  email_from_local = localStorage.getItem("emailofuser");
  role_from_local = localStorage.getItem("roleofuser");
  name_from_local = localStorage.getItem("Name");

  constructor() { }

  ngOnInit(): void {
  }

}
