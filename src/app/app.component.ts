import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD com angular2';
  flagLogo= true;

  ngOnInit(){
    setTimeout(() => {
      this.flagLogo = false;
    }, 3000);
  }
}
