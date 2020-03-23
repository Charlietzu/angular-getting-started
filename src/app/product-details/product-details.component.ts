import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {products} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(
    /*the activatedroute is specific to each routed component that the angular router
    loads*/
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //subscribing to route parameters and fetching the product based on the productId
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

}
