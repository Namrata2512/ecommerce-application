import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';



interface LoginResponse {
  access_token: string;
  data: any;
  name: string;
  status: string;
  message: string;
  adn: any;
  res: any;

}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private fb: FormBuilder;


  public url: string = 'http://localhost/project/';
  signupForm: any;
  private msgservice = new BehaviorSubject<string>('n');
  currentmsg = this.msgservice.asObservable();
  n1 = localStorage.getItem("Name");
  public productList = new BehaviorSubject<any>([]);

  public title = new BehaviorSubject('Title');
  httpOptions: { headers: HttpHeaders; };
  Product: any = [];
  newProduct: any = [];
  res: any = [];


  constructor(private http: HttpClient, private router: Router) {
    //this.httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     "Access-Control-Allow-Origin": "*",

    //   })
    // };
  }





  public create(form: any): Observable<any> {
    return this.http.post(this.url + 'registration.php', form)
      .pipe(map((res: any) => res.json()));

  }

  public login(form: any) {

    return this.http.post(this.url + 'login.php', form);


  }

  logout() {
    localStorage.clear();
    window.localStorage.clear();
    window.localStorage.removeItem("Email");
    window.localStorage.removeItem("cart");
    localStorage.removeItem("cart");
    window.localStorage.removeItem("wishlist");
    this.router.navigate(['login']);
  }


  getProduct() {
    return this.http.get<any>("https://fakestoreapi.com/products").pipe(map((res: any) => {

      return res;

    }))
  }

  setTitle(title: string) {
    this.title.next(title);
  }
  getusers() {
    let a = "http://localhost/project/display.php";
    return this.http.get(a);
  }
  getallProducts() {
    return this.productList.asObservable();
  }

  saveProduct(product: any): boolean {
    this.res.push(product);
    return true;
  }


}



