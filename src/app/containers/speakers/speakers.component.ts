import { Component, OnInit } from '@angular/core';
import {SpeakerProfile} from './speaker-card/speaker-card.component';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  speakers: SpeakerProfile[] = [
    {
      avatarUrl: '',
      name: 'พี่เน, GoodGeek',
      position: 'Founder GoodGeek Club',
      exp: 'ddfdf',
      topic: '',
    },
    {
      avatarUrl: '',
      name: 'พี่เน, GoodGeek',
      position: 'Founder GoodGeek Club',
      exp: 'ddfdf',
      topic: '',
    },{
      avatarUrl: '',
      name: 'พี่เน, GoodGeek',
      position: 'Founder GoodGeek Club',
      exp: 'ddfdf',
      topic: '',
    },{
      avatarUrl: '',
      name: 'พี่เน, GoodGeek',
      position: 'Founder GoodGeek Club',
      exp: 'ddfdf',
      topic: '',
    },{
      avatarUrl: '',
      name: 'พี่เน, GoodGeek',
      position: 'Founder GoodGeek Club',
      exp: 'ddfdf',
      topic: '',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
