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
        image: 'https://i.pinimg.com/736x/23/a0/e6/23a0e6ab8e47d964d0043f9a0804fa48.jpg',
        text: 'แบ่งปันความรูั้จากพี่ๆสู่น้องๆ'
      },
      {
        image: 'https://i.pinimg.com/736x/23/a0/e6/23a0e6ab8e47d964d0043f9a0804fa48.jpg',
        text: 'เพื่อให้น้องๆเยาวชนรู้จักกับเทคโนโลยีสารสนเทศมากขึ้น'
      },
      {
        image: 'https://i.pinimg.com/736x/23/a0/e6/23a0e6ab8e47d964d0043f9a0804fa48.jpg',
        text: 'แนะนำเทคนิคการนำ IT ไปประยุกต์ประจำวัน'
      }
    ];
  }

}
