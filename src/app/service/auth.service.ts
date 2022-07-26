import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl = "";

  constructor(private http: HttpClient,) { }
  IsLoggedIn() {
    // return !!(localStorage.getItem("Email"));
  if(localStorage.getItem('alogin')=='true'){
    return true;
  }
  if(localStorage.getItem('userlogin')=='true'){
    return true;
  }
  else{
    return false;
  }
   
   

}}
