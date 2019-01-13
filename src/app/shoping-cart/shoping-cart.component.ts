import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  constructor() { }

  itemInCart = [] ;
  itemToBuy = [] ;
  controls = 'need';

  controlSwitch(val) {
    this.controls = val;
  }


  moveToCart(i) {
    this.itemInCart.push(this.itemToBuy[i]);
    this.itemToBuy.splice(i , 1);
    this.saveItems(this.itemInCart , 'cart');
  }

  moveToBuy(i) {
    this.itemToBuy.push(this.itemInCart[i]);
    this.itemInCart.splice(i , 1);
    this.saveItems(this.itemInCart , 'cart');
  }

  saveItems(arr, key) {
    const array = JSON.stringify(arr) ;
    localStorage.setItem(key , array);
  }

  deleteDublicates () {
    for (let i = 0; i < this.itemToBuy.length; i++) {
      for (let j = 0; j < this.itemInCart.length; j++) {
        if (this.itemToBuy[i].item === this.itemInCart[j].item) {
          this.itemToBuy.splice(i , 1);
        }
      }
    }
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('cart')) !== null) {
      this.itemInCart = JSON.parse(localStorage.getItem('cart'));
      }
      this.itemToBuy = JSON.parse(localStorage.getItem('items'));
      if (JSON.parse(localStorage.getItem('items')) !== null) {
        this.deleteDublicates();
      }
  }
}
