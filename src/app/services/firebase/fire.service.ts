import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private db: AngularFireDatabase) { }

  limitData: AngularFireList<any>;

  getData(){
    return this.db.list('messages');
  }

  delete(id){
    this.db.list('messages/'+id).remove();
  }

}
