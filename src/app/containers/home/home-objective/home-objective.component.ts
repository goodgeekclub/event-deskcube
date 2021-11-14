import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-objective',
  templateUrl: './home-objective.component.html',
  styleUrls: ['./home-objective.component.css']
})
export class HomeObjectiveComponent implements OnInit {

  items:any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        image: 'assets/images/objective1.png',
        text: 'แบ่งปันความรูั้จากพี่ๆสู่น้องๆ'
      },
      {
        image: 'assets/images/objective2.png',
        text: 'เพื่อให้น้องๆเยาวชนรู้จักกับเทคโนโลยีสารสนเทศมากขึ้น'
      },
      {
        image: 'assets/images/objective3.png',
        text: 'แนะนำเทคนิคการนำ IT ไปประยุกต์ใช้ในชีวิตประจำวัน'
      }
    ];
  }

}
