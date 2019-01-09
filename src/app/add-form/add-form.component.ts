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
  search = new FormControl('');
  amount = new FormControl('');
  key = 'items' ;

  itemArray = [];
  controls = '';

  addItem() {
    if (this.item.value !== '' && this.amount.value !== '') {
      this.itemArray.push({
        item: this.item.value,
        amount: this.amount.value,
      });
      this.saveItems();
      this.clearForm();
    }
  }

  saveItems() {
    const array = JSON.stringify(this.itemArray) ;
    localStorage.setItem(this.key , array);
  }

  clearItems() {
    if (confirm ('Delete all items from this list?')) {
      localStorage.clear();
      this.itemArray = [];
    }
  }

  deleteItem (i) {
    this.itemArray.splice(i , 1);
    this.saveItems();
  }

  clearForm () {
    this.amount.setValue('');
    this.item.setValue('');
  }

  controlSwitch(val) {
    this.controls = val;
  }

  onSearch () {
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem(this.key)) !== null) {
      this.itemArray = JSON.parse(localStorage.getItem(this.key));
      }
    }
  }
