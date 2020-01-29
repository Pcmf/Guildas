import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from './../../services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nikname', 'name', 'guilda', 'telm', 'email', 'txdeath', 'txheadshot'];
  dataSource: any;
  dataTemp: any = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit() {
    this.data.getData('players').subscribe(
      (resp: any) => {
        this.dataTemp = resp;
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.sort = this.sort;
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private data: DataService, public dialog: MatDialog, private router: Router) { }

  selectRow(player) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(EditDialog, {
      width: '80%',
      data: player
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.data.setData('players/' + result.id, result).subscribe(
        (resp: any) => {
          if (result.id == 0) {
            result.id = resp;
            this.dataTemp.push(result);
            this.dataSource = new MatTableDataSource(this.dataTemp);
          }

          console.table(this.dataSource);
        },
        error => {
          console.log(error);
        }
      );

    });
  }

  // funcoes do menu

  sendEmails(id) {
    this.router.navigate(['/emails'], id);
  }

  addPlayer() {
    const player = {
      id: 0,
      name: '',
      birthyear: '',
      telm: '',
      email: '',
      linkface: '',
      guilda: '',
      txdeath: '',
      txheadshot: '',
      ative: '',
      nikname: ''
    };
    this.selectRow(player);
  }

  logOut() {
    this.data.logout();
  }

}


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'edit-dialog',
  templateUrl: 'edit-dialog.html',
  styleUrls: ['./edit-dialog.scss']
})
// tslint:disable-next-line:component-class-suffix
export class EditDialog {
  guildas: any = [];
  constructor(
    public dialogRef: MatDialogRef<EditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService) {
    this.dataService.getData('guildas').subscribe(
      resp => this.guildas = resp
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  receiveImage(event) {
    this.data.nikname = event;
  }

}
