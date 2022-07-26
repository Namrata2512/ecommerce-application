import { Component,Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() name: string;
  id: string;
  mobile: string;
  email: string;
  address: string;
  pass: string;
  role: any;
  template: any;
  usertype: string;
  showMsg: any;
  form: any;
  value: any;
  data: any;
  name1: any;




  regiform = new FormGroup(


    {
      name: new FormControl('', Validators.required),

      mobile: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),


      email: new FormControl('', [Validators.required, Validators.email]),


      address: new FormControl('', Validators.required),

      pass: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    }
  )


  getdata() {
    // alert("data has been submitted successfully");
    var name = this.regiform.get('name')?.value;
    var mobile = this.regiform.get('mobile')?.value;
    var email = this.regiform.get('email')?.value;
    var address = this.regiform.get('address')?.value;
    var password = this.regiform.get('password')?.value;
    var role = this.regiform.get('role')?.value;
    console.log(name, mobile, email, address, password, role);
  }

  constructor(private router: Router, private ApiService: ApiService, private http: HttpClient, private fb: FormBuilder) {
    let login = localStorage.setItem('submit', JSON.stringify(this.ngOnInit));
    this.ApiService.setTitle('');

  }

  ngOnInit(): void {
  }



  public submit() {


    if (this.regiform.valid) {
      const fd: FormData = new FormData();
      fd.append('id', this.id);
      fd.append('name', this.name);
      fd.append('mobile', this.mobile);
      fd.append('email', this.email);
      fd.append('address', this.address);
      fd.append('pass', this.pass);
      fd.append('role', this.role);


      fd.append('id', this.id);

      console.log(this.id),
        console.log(this.mobile),
        console.log(this.email);
      console.log(this.role);
      console.log(this.name);

      localStorage.setItem('rol', this.role);
   
      console.log(localStorage.getItem('rol'))


      localStorage.setItem('Name', JSON.stringify(this.name));
      console.log(localStorage[this.name]);
      this.name1 = localStorage[this.name];
      console.log(this.name1);

      this.ApiService.create(fd)
        .subscribe(
          (data: any) => {
            if (data.userexists === "true") {
              this.showMsg = true;
         

            }

            else {
              alert(' Something went wrong');


            }

          });


    }
  }


}
