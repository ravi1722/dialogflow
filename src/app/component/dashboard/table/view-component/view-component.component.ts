import { Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AngularFireDatabase } from 'angularfire2/database';

import { TableComponent } from '../table.component';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  limitData: any[] = [];
  constructor(private db: AngularFireDatabase, public dialogRef: MatDialogRef<TableComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.db.list('messages/' +this.data).snapshotChanges().subscribe(user=> {
      this.limitData = [];
      user.forEach(test => {
        let y = test.payload.toJSON();
          this.limitData.push(y);
      });
    });
  }

}
