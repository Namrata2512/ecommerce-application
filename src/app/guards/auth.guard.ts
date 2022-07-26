import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) { }

  canActivate() {
    // return true;
    if (this.auth.IsLoggedIn()) {

      return true;
    }
    else {
      alert('please login First');
      // this.router.navigateByUrl('auth/signin');
      this.router.navigate(['auth/signup']);
      return false;
     

    }
  }

}


