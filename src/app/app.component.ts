import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iniciando-angular2-mais';
  flagLogo= true;

  ngOnInit(){
    setTimeout(() => {
      this.flagLogo = false;
    }, 3000);
  }
}
