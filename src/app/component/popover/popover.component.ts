import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Router } from '@angular/router';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  mealType;
  coffe:string;
  price=7;
  price1=9;
  price3=11;
  total=0;
  mealType1;
  mealType2;
  mealType3;
  mealType4;
  coffeType;
coffeType1;
coffeType2;
coffeType3;
coffeType4;
coffeType5;
coffeType6;
coffeType7;
coffeType8;
numCoffe=0;
numCoffe1=0;
numCoffe2=0;
numCoffe3=0;
numCoffe4=0;
numCoffe5;
numCoffe6;
numCoffe7;
numCoffe8;
  constructor(public alertControll: PopoverController,private data : Router ) { }
  
  async presentPopover(ev: any) {
   
    this.alertControll.dismiss();
   
    console.log(this.coffe);
    
    const popover = await this.alertControll.create({
      component: PopUpComponent,
      event: ev,
      translucent: true
      
    });
    return await popover.present();
  }
nav1(){
  this.alertControll.dismiss();
   this.data.navigate(['/pop-up'],{queryParams: {numCoffe:this.numCoffe,numCoffe1:this.numCoffe1,numCoffe2:this.numCoffe2,numCoffe3:this.numCoffe3,numCoffe4:this.numCoffe4,numCoffe5:this.numCoffe5,numCoffe6:this.numCoffe6,numCoffe7:this.numCoffe7,coffeType: this.coffeType,coffeType1: this.coffeType1,coffeType2: this.coffeType2,coffeType3: this.coffeType3,coffeType4: this.coffeType4}});
  this.data.navigate(['/pop-up'],{queryParams: {mealType: this.mealType,mealType1: this.mealType1,mealType2: this.mealType2,mealType3: this.mealType3,mealType4: this.mealType4,total: this.total,price: this.price,price1: this.price1,price3: this.price3}});
}
orderMuffin(){
  this.mealType="Chocolate Muffin"
this.total +=this.price;
console.log(this.total);
console.log(this.price);
}
orderMuffin1(){
  this.mealType1="Hazzy Muffin"
this.total +=(this.price + 1.49);
console.log(this.total);
console.log(this.price);
}
orderDog(){
  this.mealType2="Space Donut"
  this.total +=this.price1;
  console.log(this.total);
console.log(this.price1);
}
orderPizza(){
  this.mealType3="Cheese Pizza Slice"
  this.total +=this.price3;
  console.log(this.total);
console.log(this.price3);
}
orderPizza1(){

  this.mealType4="Cheese Grizzly Lasagna"
  this.total +=(this.price3+ 1.50);
  console.log(this.total);
console.log(this.price3);
}
  ngOnInit() {
  

}
}