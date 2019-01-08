import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor() { }

  item = new FormControl('');
  amount = new FormControl('');
  key = 'items' ;

  itemArray = [];

  addItem() {
    if (this.item.value !== '' && this.amount.value !== '') {
      this.itemArray.push({
        item: this.item.value,
        amount: this.amount.value,
      });
      this.saveItems();
    }
  }

  saveItems() {
    const array = JSON.stringify(this.itemArray) ;
    localStorage.setItem(this.key , array);
  }

  clearItems() {
    localStorage.clear();
    this.itemArray = [];
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem(this.key)) !== null) {
      this.itemArray = JSON.parse(localStorage.getItem(this.key));
    }
  }

}
