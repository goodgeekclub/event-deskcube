import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links = [
    { title: 'Home', location: '/', hashtag: undefined },
    { title: 'Agenda', location: '/', hashtag: 'agenda' },
    { title: 'Speakers', location: '/speakers', hashtag: undefined },
    { title: 'Location', location: '/', hashtag: 'location' },
    { title: 'Pricing', location: '/', hashtag: 'pricing' },
    { title: 'Contact Us', location: '/', hashtag: 'footer' },
    { title: 'Staff', location: '/staff', hashtag: undefined },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  clickMenu() {
    console.log('CLICK');
  }
}
