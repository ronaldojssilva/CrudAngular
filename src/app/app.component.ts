import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CRUD com angular2';
  flagLogo= true;
  objContext = {
    $implicit: 'valor',
    name:'Ronaldo'
  }

  ngOnInit(){
    setTimeout(() => {
      this.flagLogo = false;
    }, 3000);
  }

  mudarNome(){
     this.objContext.name = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  }
}
