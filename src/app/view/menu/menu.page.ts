import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/component/popover/popover.component';
import { PopUpComponent } from 'src/app/component/pop-up/pop-up.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
answCoffe=0 ;
numCoffe=0;
numCoffe1=0;
numCoffe2=0;
numCoffe3=0;
numCoffe4=0;
numCoffe5;
numCoffe6;
numCoffe7;
numCoffe8;
price=9.49;
totalCoff=0;
coffeType;
coffeType1;
coffeType2;
coffeType3;
coffeType4;
coffeType5;
coffeType6;
coffeType7;
coffeType8;

  constructor(public alertControll: PopoverController,private obj:Router ) { 
    this.numCoffe=0;
    this.numCoffe1=0;
    this.numCoffe2=0;
    this.numCoffe3=0;
    this.numCoffe4=0;}


  
  async presentPopover(ev: any) {
    this.obj.navigate(['/pop-up'],{queryParams: {numCoffe:this.numCoffe,numCoffe1:this.numCoffe1,numCoffe2:this.numCoffe2,numCoffe3:this.numCoffe3,numCoffe4:this.numCoffe4,numCoffe5:this.numCoffe5,numCoffe6:this.numCoffe6,numCoffe7:this.numCoffe7,coffeType: this.coffeType,coffeType1: this.coffeType1,coffeType2: this.coffeType2,coffeType3: this.coffeType3,coffeType4: this.coffeType4,totalCoff :this.totalCoff}});
    const popover = await this.alertControll.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  nav(){
    this.obj.navigate(['/pop-up'],{queryParams: {numCoffe:this.numCoffe,numCoffe1:this.numCoffe1,numCoffe2:this.numCoffe2,numCoffe3:this.numCoffe3,numCoffe4:this.numCoffe4,numCoffe5:this.numCoffe5,numCoffe6:this.numCoffe6,numCoffe7:this.numCoffe7,coffeType: this.coffeType,coffeType1: this.coffeType1,coffeType2: this.coffeType2,coffeType3: this.coffeType3,coffeType4: this.coffeType4,totalCoff :this.totalCoff}});
  }


  orderMore(){
    this.coffeType =" Rasta Ristretto " + "R " + this.price;
    this.answCoffe += 1;
      this.numCoffe += 1;
      this.totalCoff += this.price ;
        console.log(this.numCoffe)
        console.log(this.totalCoff)
        
      }


  orderMore1(){

this.coffeType1 =" Rasta Americano " + "R " + (this.price + 4.59);
this.answCoffe += 1;
  this.numCoffe1 += 1;
  this.totalCoff += (this.price + 4.59) ;
    console.log(this.numCoffe1)
    console.log(this.totalCoff)
    console.log(this.price + 4.59)
  }


  orderMore2(){
    this.answCoffe += 1;
this.coffeType2 =" Rasta Latte " + "R " + (this.price - 2.01);
  this.numCoffe2 += 1;
  this.totalCoff += (this.price - 2.01) ;
    console.log(this.numCoffe2)
    console.log(this.totalCoff)
    console.log(this.price - 2.01)
  }


  orderCoffe(){
    this.answCoffe += 1;
    this.coffeType3 =" Rasta Espresso " + "R " + (this.price + 3.50);
      this.numCoffe3 += 1;
      this.totalCoff += (this.price + 3.50) ;
        console.log(this.numCoffe3)
        console.log(this.totalCoff)
        console.log(this.price + 3.50)
      }
  
    
  orderCoffe1(){
    
    this.coffeType4 =" Rasta Cappaccino " + "R " + (this.price + 3.50);
    this.answCoffe += 1;
 this.numCoffe4 += 1;
this.totalCoff += (this.price + 3.50) ;
 console.log(this.numCoffe4)
console.log(this.totalCoff)
console.log(this.price + 3.50)
 }
    

orderCoffe2(){
    
    this.coffeType =" Rasta Cappaccino " + "R " + (this.price - 2.50);
    this.answCoffe += 1;
 this.numCoffe += 1;
 this.totalCoff += (this.price - 2.50) ;
 console.log(this.numCoffe)
 console.log(this.totalCoff)
 console.log(this.price - 2.50)
 }


 coffeOrder(){
  
  this.coffeType =" Rasta Mocha " + "R " + (this.price - 2.50);
this.numCoffe += 1;
this.totalCoff += (this.price - 2.50) ;
console.log(this.numCoffe)
console.log(this.totalCoff)
console.log(this.price - 2.50)
}



coffeOrder1(){
  this.coffeType =" Rasta Extra Strong Caffine " + "R " + (this.price + 5.50);
  
this.numCoffe += 1;
this.totalCoff += (this.price + 5.50) ;
console.log(this.numCoffe)
console.log(this.totalCoff)
console.log(this.price + 5.50)
}

coffeOrder2(){
  this.coffeType =" Rasta Creamy Glace " + "R " + (this.price - 1.50);
  
this.numCoffe += 1;
this.totalCoff += (this.price - 1.50) ;
console.log(this.numCoffe)
console.log(this.totalCoff)
console.log(this.price - 1.50)
}
  
  
ngOnInit() {
    console.log(this.coffeType);
  }

}
