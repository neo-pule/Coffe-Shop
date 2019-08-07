import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {

  @Input() numCoffe
  @Input() price
  @Input() total
  @Input() coffeType
  @Input() coffe
  
   
  constructor(private addr:ActivatedRoute) { }

  ngOnInit() {
    this.addr.queryParams.subscribe(data => {
      console.log(data)

      this.price = data.price;
      console.log(this.price);

      this.coffe = data.coffe;
      console.log(this.coffe)
      this.price = data.price;
    console.log(this.price);
    
    this.coffeType = data.coffeType;
    console.log(this.coffeType);
    this.total = data.total;
    console.log(this.total);});
  }
  Print()
  {
    window.print()
  }

}
