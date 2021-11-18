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
      avatarUrl: 'assets/images/speakers/na.png',
      name: 'พี่เน',
      position: 'Founder GoodGeek',
      exp: 'Working Data Processing Lead at Non-Profit Org',
      topic: 'Create Portfolio Online',
    },
    {
      avatarUrl: 'assets/images/speakers/boy.png',
      name: 'พี่บอย , Bigdata RPG',
      position: 'Senior DS/AI Researcher',
      exp: 'Bank Industry: since 2018 , Logistic Platform: since 2021 , Bank and Travel since 2021',
      topic: 'Data กับการศึกษา และงานในอนาคต',
    },
    {
      avatarUrl: 'assets/images/speakers/putter.png',
      name: 'พี่พัตเตอร์',
      position: 'นักศึกษา',
      exp: 'คณะบริหารศาสตร์ สาขาบัญชี มหาวิทยาลัยอุบลราชธานี',
      topic: 'ความรู้พื้นฐานการใช้งาน Google Spreadsheet',
    },
    {
      avatarUrl: 'assets/images/speakers/mac.png',
      name: 'พี่แม็ค',
      position: 'นักศึกษา',
      exp: 'คณะวิทยาการคอมพิวเตอร์ สาขา วิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏสวนสุนันทา',
      topic: 'การใช้งานเทคนิค Basic Canva',
    },
    {
      avatarUrl: 'assets/images/speakers/art.png',
      name: 'พี่อาร์ต',
      position: 'นักศึกษา',
      exp: 'มหาวิยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ สาขาเทคโนโลยีสารสนเทศและการสื่อสาร ',
      topic: 'Basic game developer',
    },
    {
      avatarUrl: 'assets/images/speakers/big.png',
      name: 'พี่บิ๊ก',
      position: 'นักศึกษา',
      exp: 'มหาวิยาศิลปากร เพชรบุรี คณะเทคโนโลยีสารสนเทศและการสื่อสาร สาขาออกแบบอินเทอร์แอคทีฟแอปพลิเคชัน ',
      topic: 'Basic game developer',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
