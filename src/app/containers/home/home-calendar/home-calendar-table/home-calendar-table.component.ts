import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-calendar-table',
  templateUrl: './home-calendar-table.component.html',
  styleUrls: ['./home-calendar-table.component.css']
})
export class HomeCalendarTableComponent implements OnInit {
  @Input() title: string = 'วันจัดกิจกรรม';
  @Input() dataSource: AgendaTableContent[] = [];
  columns = ['time', 'content']
  constructor() { }

  ngOnInit(): void {
  }

}

export interface AgendaTableContent {
  time: string;
  content: string;
}
