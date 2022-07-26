import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/users';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  email_from_local = localStorage.getItem("emailofuser");
  role_from_local = localStorage.getItem("roleofuser");
  name_from_local = localStorage.getItem("Name");
  n: any;
  user1: any;
  data: any;
  allusers: any = [];
  user: any;
  AddproductForm: FormGroup;
  title: string;
  price: number;
  description: string;
  rating: number;
  image: any;




  constructor(private apiservice: ApiService, private formBuilder: FormBuilder) {
    this.apiservice.getusers().subscribe(
      data1 => {
        console.log(data1);
      }
    )
  
  }

  ngOnInit(): void {
    this.user1 = this.apiservice.getusers().subscribe((data1) => {
      this.user1 = data1;
      console.log(data1);
      this.allusers = data1;
    });

    this.AddproductForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required)

    })

  }
  resetForm() {
    this.AddproductForm.reset();

  }
  addProduct() {
    console.log(this.AddproductForm.value);

    alert("product Saved successfully");


  }

  getn() {
    alert(this.n);
  }


}



