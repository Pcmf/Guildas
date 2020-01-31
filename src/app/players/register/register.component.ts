import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = [];
  guildas: any = [];

  constructor(private dataService: DataService) {
    this.form.id = 0;
    this.dataService.getData('guildas').subscribe(
      resp => this.guildas = resp
    );
  }

  ngOnInit() {
  }

  saveForm(f) {
    f.nikname = this.form.nikname;
    this.dataService.setData('players/0' , f).subscribe(
      (resp: any) => {
          console.log(resp);
          if (isNaN(resp)) {
            alert('Houve um erro no registo!');
           } else {
             alert('Foi registado com sucesso!');
             this.dataService.logout();
           }
      },
      error => {
        console.log(error);
      }
    );
  }

  receiveImage(event) {
    this.form.nikname = event;
  }
}
