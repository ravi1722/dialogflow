import { Component, OnInit, ViewChild } from '@angular/core';
import { FireService } from '../../../services/firebase/fire.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewComponentComponent } from './view-component/view-component.component';


import { MatPaginator } from '@angular/material/paginator'; 
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dialogflow: MatTableDataSource<any>;
  @ViewChild('DialogflowPaginator', {static: true}) dialogflowPaginator: MatPaginator;
 

  constructor(private db: FireService, private dialog: MatDialog) {
    this.dialogflow = new MatTableDataSource;

   }
  data:any;

  dataSource:any[] = [];

  displayedColumns: string[] = ['date', 'req', 'email', 'action'];



  ngOnInit(): void {
    this.db.getData().snapshotChanges().subscribe(user => {
      this.data = user;
      console.log(this.data.date);
      this.dataSource = [];
      user.forEach(element =>{
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.dataSource.push(y);
      });
      const element : any[] = this.dataSource; 
      this.dialogflow.data = element;
      this.dialogflow.paginator = this.dialogflowPaginator;
    });
  }

  


  views(element){
    this.dialog.open(ViewComponentComponent,{
      data: element
    })
  }

  date(searchdate){
    let dd = String(searchdate.value.getDate()).padStart(2, '0');
    let mm = String(searchdate.value.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = searchdate.value.getFullYear();
    let time = yyyy + "-" +mm+ "-" + dd;
    this.dialogflow.filter = time;
  }

  delete(id: string){
    if(confirm("Are you sure to delete?")){
      this.db.delete(id);
    }
  }
}

