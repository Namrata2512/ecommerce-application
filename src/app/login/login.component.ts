import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  email: any;
  email1: any;
  pass: any;
  role: any;
  logindata: any = {};
  public signin = [];
  public signin1 = [];
  data: any;
  name: any;
  role1: any;


  constructor(private router: Router, private apiService: ApiService, private http: HttpClient, private fb: FormBuilder,
  ) {
    this.logindata.email = "";
    this.logindata.pass = "";
    this.logindata.role = "";
    let login = localStorage.setItem('login', JSON.stringify(this.login));
    this.apiService.setTitle('');


  }
  ngOnInit(): void {
    this.apiService.logout();
  }

  async login() {

    let fd1 = new FormData();
    fd1.append('email', this.logindata.email);
    fd1.append('pass', this.logindata.pass);
    fd1.append('role', this.logindata.role);

    this.email = this.data;
    localStorage.setItem('Email',(this.logindata.email));
    // console.log(localStorage[this.logindata.email]);
    // this.email1 = localStorage[this.logindata.email];
    // console.log(this.email1);


    this.role = this.data;
    localStorage.setItem('role', JSON.stringify(this.logindata.role));
    // console.log(localStorage[this.logindata.role]);
    this.role1 = localStorage[this.logindata.role];
    // console.log(this.role1);


    if (this.logindata.email != "" && this.logindata.pass != "" && this.logindata.role != "") {
      // console.log("email:", this.logindata.email);
      // console.log("pass:", this.logindata.pass);
      // console.log("role", this.logindata.role);

      let datapost = new FormData();
      datapost.append('email', this.logindata.email);
      datapost.append('pass', this.logindata.pass);
      datapost.append('role', this.logindata.role);
      this.apiService.login(datapost)
        .subscribe(res => {
          if (res != null) {
            // console.log('login successful');
            alert('welcome' .concat(this.logindata.email));

            // this.router.navigate(['/admin-dashboard']);
          }

          else {
            alert(' Enter Valid Email And Password');
          }
          
          if (this.logindata.role == 'admin' && res != null) {
            this.router.navigate(['/admin-dashboard'])
          }
          else {
            alert(' Enter Valid Email And Password');
            this.router.navigate(['/products'])
          }
          // console.log(' Enter Valid Email And Password');
        });

    }


  }
}
