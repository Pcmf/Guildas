import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dataenvio', 'guilda', 'assunto', 'corpoemail', 'erro'];
  dataSource: any;
  private dataTemp: any;
  constructor(private data: DataService, private dialog: MatDialog) { }

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



  newEmail() {
    const email = {id: 0, dataenvio: '', assunto: '', corpoemail: '', guilda: '', erro: ''};
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(NewEmailDialog, {
      width: '80%',
      data: email
    });
    dialogRef.afterClosed().subscribe(result => {
      this.data.setData('emails/' + result.guilda, result).subscribe(
        (resp: any) => {
            result.id = +resp;
            // result.erro = resp.erros;
            this.dataTemp.unshift(result);
            this.dataSource = new MatTableDataSource(this.dataTemp);
        },
        error => {
          console.log(error);
        }
      );

    });
  }


}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'new-email-dialog',
  templateUrl: 'new-email-dialog.html',
  styleUrls: ['./new-email-dialog.scss']
})
// tslint:disable-next-line:component-class-suffix
export class NewEmailDialog {
  guildas: any = [];
  constructor(
    public dialogRef: MatDialogRef<NewEmailDialog>,
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
