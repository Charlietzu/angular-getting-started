import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CartService {
    items = [];
    
    addToCart(product) {
        this.items.push(product);
    }

    getItems(){
        return this.items;
    }

    clearCart(){
        this.items = [];
        return this.items;
    }

    getShippingPrices(){
        //using get method from HttpClient to retrieve shipping data
        return this.http.get('/assets/shipping.json');
    }

    constructor(
        //injecting HttpClient into the CartService constructor, we will use it to get data from external sources
        private http: HttpClient
    ){}
}