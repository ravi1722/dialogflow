import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any;
  constructor(private router: Router, private db: AngularFireDatabase) { }

  ngOnInit(): void {
  }

  login(login){
    const email = login.value.email;
    const password = login.value.password;
    this.db.list('login').valueChanges().subscribe(user => {
      this.data = user;
      if(this.data[0] == email && this.data[1] == password){
        this.router.navigate(['/dashboard'])
      }
    });
  }
}
