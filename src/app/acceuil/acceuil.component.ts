import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  
  @Input() appareilleName: string =""; //
  @Input() appareilleStatus: string =""; 


  constructor() { }

  ngOnInit(): void {
  }

  getStatus()  {
    return this.appareilleStatus;
  }

  getColor() {
     if(this.appareilleStatus ==='Allumer') {
       return 'green';
     }
     else { 
        return 'red';
     }
  }

}

function input() {
  throw new Error('Function not implemented.');
}

