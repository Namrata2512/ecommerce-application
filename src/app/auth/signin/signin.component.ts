import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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
  admin_loggedin: string;
  user_loggedin: string;


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

  login() {

    let fd1 = new FormData();
    fd1.append('email', this.logindata.email);
    fd1.append('pass', this.logindata.pass);
    fd1.append('role', this.logindata.role);

    this.email = this.data;

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
            alert('welcome'.concat(this.logindata.email) + (this.logindata.role));
            localStorage.setItem('emailofuser',this.logindata.email);
            localStorage.setItem('roleofuser',this.logindata.role);
            console.log(localStorage.getItem('emailofuser'));


            // this.router.navigate(['/admin-dashboard']);
          }

          else {
            alert(' Enter Valid Email And Password and role');
            this.router.navigate(['/products'])

          }
          if (this.logindata.role == 'admin' && res != null) {
            this.router.navigate(['/admin-dashboard'])
            this.admin_loggedin = 'true';
            localStorage.setItem('alogin', this.admin_loggedin);
            //  localStorage.getItem('alogin');
          }

          if (this.logindata.role == 'user' && res != null) {
            this.router.navigate(['/user-dashboard']);
            this.user_loggedin = 'true';
            localStorage.setItem('userlogin', this.user_loggedin);
          }

          // else {
          //   this.router.navigate(['/products'])
          // }
          // console.log(' Enter Valid Email And Password');
        });

    }


  }

}
