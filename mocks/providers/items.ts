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
        "name": "How do I change my IWU NetID password?",
        "about": "In order to change your Password, you will need to go to the following link https://passchange.iwu.edu/. Your new password will need to be at least 9 characters long and must contain a combination of uppercase and lowercase letters and at least one number."
      },
      {
        "name": "How do I see my graduation requirements that I still need to complete?",
        "about": "You will need to log into your myIWU account and click on Banner Self Service. After that choose student menu and then degree evaluation."
      },
      {
        "name": "What is my NetID?",
        "about": "Your network ID, also known as NetID, is printed on your University ID card and is your personal online Identifier. Your NetID is used for your University e-mail address and to access several other IWU campus network services."
      },
      {
        "name": "How do I set up my gaming system to the IWU network?",
        "about": "At the current moment, consoles are not able to do any kind of authentication with usernames and passwords on our wireless networks. Having a wired internet connection is a necessity for gaming on our campus network. Each room in every residence hall has an ethernet port, one for each student in the room. This means you may need an additional piece of hardware to share the ports between your roommate and other computer equipment, depending on the amount of devices."
      },
      {
        "name": "Can a visitor connect to the IWU network?",
        "about": "Visitors are able to connect to the IWU network. They must connect to the Guest-Wireless connection."
      },
      {
        "name": "Are there computer labs available for student use?",
        "about": "There are computer labs for students to use all over campus. See the following link for a list of all available labs https://www.iwu.edu/information-technology-services/computer-labs/."
      },
      {
        "name": "Where can I print my work?",
        "about": "There are printers available in Ames, State Farm, and CNS. Printing is completely free."
      },
      {
        "name": "Does Illinois Wesleyan offer any discounts on Office 365?",
        "about": "Office 365 is completely free to Illinois Wesleyan students."
      },
      {
        "name": "How do I download Office 365?",
        "about": "A step by step guide can be found at the Microsoft 365 page: https://www.iwu.edu/information-technology-services/services/office-365.html."
      },
      {
        "name": "I am a professor having trouble with my software. Who can I contact to help with the issue?",
        "about": "Information Technology can help with that issue. The following services are offered: Fix broken hardware, Virus/Spyware/Malware removal, Data recovery, Hardware replacement/upgrades/ Software installation, General troubleshooting."
      },
      {
        "name": "How do I get started with Mathematica?",
        "about": "The following link will walk you through mathematica and how to get started https://www.iwu.edu/information-technology-services/services/mathematica.html."
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
}
