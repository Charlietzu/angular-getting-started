import { Component, OnInit } from '@angular/core';
import {products} from '../products';
import {ProductAlertsComponent} from '../product-alerts/product-alerts.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit() {
  }

  share(){
    window.alert('The product has been shared!');
  }
  
  /*it's the parent component that achts when the child raises the event, so,
  the product-list component, not the product-alerts component */
  onNotify(){
    window.alert('You will be notified when the product hoes on sale');
  }

}
