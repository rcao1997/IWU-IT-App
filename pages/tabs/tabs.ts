import { Component } from '@angular/core';

import { ticketPage } from '../ticket/ticket';
import { livechatPage } from '../livechat/livechat';
import { HomePage } from '../home/home';
import { faqPage } from '../faq/faq';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = faqPage;
  tab3Root = livechatPage;
  tab4Root = ticketPage;
  tab5Root = SearchPage;

  constructor() {

  }
}
