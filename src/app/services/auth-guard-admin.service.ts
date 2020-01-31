import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService {

  constructor(private loginService: DataService,
              private router: Router) {
     }

canActivate() {
if (this.loginService.isLoggedIn() && this.loginService.getUserType() == 'Admin') {
return true;
}
this.router.navigate(['/login']);
return false;
}
}
