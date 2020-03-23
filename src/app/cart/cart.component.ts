import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  //this property will store the form model
  checkoutForm;

  constructor(
    //injecting the CartService so that the cart component can use it
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    /*setting the checkoutForm property with a form model containing name and address fields, using the
    FormBuilder group() method */
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  //Process checkout data here
  onSubmit(customerData){
    /*using the CartService clearcart() method to empty the cart items and reset the form after its submission,
    in a real-world app this method would also submit the data to the backend*/
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
