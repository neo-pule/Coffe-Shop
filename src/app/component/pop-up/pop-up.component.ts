import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
 date = Date.now();
  @Input() numCoffe
  @Input() numCoffe1
  @Input() numCoffe2
  @Input() numCoffe3
  @Input() numCoffe4
  @Input() price
  @Input() price1
  @Input() price3
  @Input() total
  @Input() coffeType
  @Input() coffe
 
 
  @Input() totalCoff
  @Input() mealType
  @Input() mealType1
  @Input() mealType2
  @Input() mealType3
  @Input() mealType4
  @Input() coffeType1;
  @Input() coffeType2;
  @Input() coffeType3;
  @Input() coffeType4;
  Print()
  {
    window.print()
  }
  constructor(public alertControll: PopoverController,private addr : ActivatedRoute) { }
Next(){
  this.alertControll.dismiss();
}
  ngOnInit() {
    this.addr.queryParams.subscribe(data => {
      console.log(data)

      this.mealType1 = data.mealType1;
      console.log(this.mealType1);

      this.mealType2 = data.mealType2;
      console.log(this.mealType2);

      this.coffeType = data.coffeType;
      console.log(this.coffeType);

      this.coffeType1 = data.coffeType1;
      console.log(this.coffeType1);

        this.coffeType2 = data.coffeType2;
      console.log(this.coffeType2);
  
      this.coffeType3 = data.coffeType3;
      console.log(this.coffeType3);

        this.coffeType4 = data.coffeType4;
      console.log(this.coffeType3);

        this.coffeType4 = data.coffeType4;
      console.log(this.coffeType4);

    this.numCoffe = data.numCoffe;
    console.log(this.numCoffe);

    this.numCoffe1 = data.numCoffe1;
    console.log(this.numCoffe1);

    this.numCoffe2 = data.numCoffe2;
    console.log(this.numCoffe2);

    this.numCoffe3 = data.numCoffe3;
    console.log(this.numCoffe3);

    this.numCoffe4 = data.numCoffe4;
    console.log(this.numCoffe4);

    this.total = data.total;
    console.log(this.total);

    this.totalCoff = data.totalCoff;
    console.log(this.totalCoff);

    

    
    this.price = data.price;
    console.log(this.price);

    this.price1 = data.price1;
    console.log(this.price1);


    this.price3 = data.price3;
    console.log(this.price3);

    this.mealType = data.mealType;
    console.log(this.mealType);
    this.mealType3 = data.mealType3;
    console.log(this.mealType3);
    this.mealType4 = data.mealType4;
    console.log(this.mealType4);
  });

}
}