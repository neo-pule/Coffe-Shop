import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
num :number;
x :number;
  constructor() {}

  click(){
  this.num = (this.x+3);
  console.log(this.num);
  }
  click1(){
    this.num = (this.x-3);
    console.log(this.num);
  }
}
