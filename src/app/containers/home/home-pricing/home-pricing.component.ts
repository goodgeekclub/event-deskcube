import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-pricing',
  templateUrl: './home-pricing.component.html',
  styleUrls: ['./home-pricing.component.css']
})
export class HomePricingComponent implements OnInit {

  cards = [
    {title: 'Free', desc: 'สำหรับผู้สมัคร 5 ท่านแรก', color: 'var(--my-canary)'},
    {title: '159', desc: 'ทำภารกิจพิเศษ', color: '#928A97'},
    {title: '199', desc: 'เข้าร่วมแบบไร้เงื่อนไข', color: '#5C718C'},
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
