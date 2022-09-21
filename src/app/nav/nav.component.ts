import { Component, OnInit } from '@angular/core';

import { cilList, cilShieldAlt } from '@coreui/icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menuItem=[
    {
      id:"Home",name:"首頁"
    },{
    id:"Profile",name:"關於我"
  },{
    id:"ContactUS",name:"聯絡我"
  },{
    id:"GetOpenData",name:"農業觀光園區資訊"
  },{
    id:"TodoList",name:"行事曆"
  },]

  icons = { cilList, cilShieldAlt };
  
  constructor() { }

  ngOnInit(): void {
  }

}
