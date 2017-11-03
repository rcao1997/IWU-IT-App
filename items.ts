import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "How to connect to IWU wifi?",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "chuivhw."
  };


  constructor() {
    let items = [
      {
        "name": "How to connect to IWU wifi?",
        "profilePic": "http://godlessmom.com/wp-content/uploads/2015/05/Question-mark-red-3D-glossy.jpg",
        "about": "chuivhw."
      },
      {
        "name": "What if bad connection. ",
        "profilePic": "http://godlessmom.com/wp-content/uploads/2015/05/Question-mark-red-3D-glossy.jpg",
        "about": "cduivhwaeviuwh."
      },
      {
        "name": "forget password?",
        "profilePic": "http://godlessmom.com/wp-content/uploads/2015/05/Question-mark-red-3D-glossy.jpg",
        "about": "cwieuafhwieu."
      },
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
