import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.css']
})
export class SpeakerCardComponent implements OnInit {
  @Input() profile?: SpeakerProfile
  defaultImg = 'assets/images/speakers/example.png';
  constructor() { }

  ngOnInit(): void {
  }

}
export interface SpeakerProfile {
  avatarUrl: string;
  name: string;
  position: string;
  exp: string;
  topic: string;
}
