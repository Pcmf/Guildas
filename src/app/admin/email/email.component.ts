import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  displayedColumns: string[] = ['dataenvio', 'guilda', 'assunto', 'corpoemail'];
  dataSource: any;
  private dataTemp: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData('emails').subscribe(
      (resp: any) => {
        this.dataTemp = resp;
        this.dataSource = new MatTableDataSource(resp);
      }
    );
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


