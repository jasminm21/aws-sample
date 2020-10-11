import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arr-op',
  templateUrl: './arr-op.component.html',
  styleUrls: ['./arr-op.component.css']
})
export class ArrOpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  products=[];

  addProduct(product){
    this.products.push({
      name:product.value
    });
  }

  delProduct(item){
    // this.products.pop();
    // this.products.splice(this.products.length-1);
    this.products.splice(item,1);
  }
}
