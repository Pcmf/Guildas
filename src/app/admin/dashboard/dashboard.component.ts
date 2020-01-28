import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from './../../services/data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'guilda', 'telm', 'email', 'txdeaths', 'txheadshots'] ;
  dataSource: any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit() {
    this.data.getData('players').subscribe(
      (resp: any) => {
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.sort = this.sort;
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private data: DataService, public dialog: MatDialog) { }

  selectRow(player) {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(EditDialog, {
      width: '80%',
      data: player
    });

    dialogRef.afterClosed().subscribe(result => {
      console.table(result);
    });
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

}
