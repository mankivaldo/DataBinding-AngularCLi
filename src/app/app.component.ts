import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 isAuth = false;
 appareills = [
   {
      name: 'Machine à laver',
      status: 'Allumer'
   },
   { 
    name: 'Tele',
      status: 'Allumer'
   },
    
   { 
    name: 'Ordi',
      status: 'Etient'
   }
 ];
 constructor (){
  setTimeout(
    () => {
      this.isAuth = true;
    }, 5000
  ) 

 }
}
