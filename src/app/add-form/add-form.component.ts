import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor() { }

  key = 'items';
  item = new FormControl('');
  searchBar = new FormControl('');
  amount = new FormControl('');
  package = new FormControl('');
  packages = [
    {type: 'box'},
    {type: 'jar'},
    {type: 'bottle'},
    {type: 'tuba'},
    {type: 'glass'},
    {type: 'ampoule'},
    {type: 'package'},
  ];

  itemArray = [];
  searchArray = [];
  search = false;
  controls = '';

  addItem() {
    if (this.item.value !== '' && this.amount.value !== '') {
      this.itemArray.push({
        item: this.item.value,
        amount: this.amount.value,
        package: this.package.value,
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
    if (val === 'search') {
      this.search = true ;
    } else {
      this.search = false ;
    }
  }

  onSearch () {
    this.searchArray = [];
    if (this.searchBar.value !== '') {
      for (let i = 0; i < this.itemArray.length; i++) {
        if (this.searchBar.value === this.itemArray[i].item) {
            this.searchArray.push(this.itemArray[i]);
        }
      }
    } else {
      this.searchArray = [];
    }
    this.searchBar.setValue('');
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem(this.key)) !== null) {
      this.itemArray = JSON.parse(localStorage.getItem(this.key));
      }
    }
  }
