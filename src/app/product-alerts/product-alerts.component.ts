import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {
  /*this decorator indicates that the value passes in from the component's parent,
  the product list component*/
  @Input() product;
  /*here we name a property named notify, which will allow the product alert component
  to emit an event when the value of notify property changes*/
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
