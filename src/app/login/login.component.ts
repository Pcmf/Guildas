import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  erro: boolean;

  constructor(private dataService: DataService, private router: Router) {
    this.erro = false;
   }

  submit(form) {
    this.dataService.checkUser(form).subscribe(
      resp => {
        if (resp) {
          switch (this.dataService.getUserType()) {
            case 'Player':
              this.router.navigate(['/players']);
              break;
            case 'Admin':
              this.router.navigate(['/admin']);
              break;
            default:
              this.router.navigate(['/']);
              break;
          }
        } else {
          this.erro = true;
        }

      }
    );

  }

  ngOnInit() {
  }

}
