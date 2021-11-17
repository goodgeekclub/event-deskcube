import { Component, OnInit } from '@angular/core';
import {AgendaTableContent} from './home-calendar-table/home-calendar-table.component';

@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.css']
})
export class HomeCalendarComponent implements OnInit {

  day1: AgendaTableContent[] =[
    {time: '08:30', content: 'ลงทะเบียน'},
    {time: '08:45', content: 'เเจ้งกำหนดการภาพรวม เเละ กำหนดการกิจกรรม'},
    {time: '09:00 ', content: 'กิจกรรมสร้างความสัมพันธ์'},
    {time: '10:00 ', content: 'ความรู้พื้นฐานการใช้งาน'},
    {time: '11:30', content: 'พักกลางวัน'},
    {time: '13:00', content: 'กิจกรรมผ่อนคลาย'},
    {time: '14:00', content: 'Work Shop การใช้ Google'},
    {time: '16:00', content: 'Create Portfolio Online'},
    {time: '19:30', content: 'Set Zero & กิจกรรมพิเศษ'},
  ];
  day2: AgendaTableContent[] =[
    {time: '08:30', content: 'ลงทะเบียน'},
    {time: '08:45', content: 'กิจกรรมพิเศษ'},
    {time: '09:30', content: 'ความรู้พื้นฐานเกี่ยวกับการออกเเบบ'},
    {time: '10.30', content: 'วิทยากรพิเศษ'},
    {time: '12:00', content: 'พักกลางวัน'},
    {time: '13:00', content: 'กิจกรรมผ่อนคลาย'},
    {time: '13:30', content: 'Basic game developer'},
    {time: '15:45', content: 'วิทยากรพิเศษ'},
    {time: '19:30', content: 'Set Zero & กิจกรรมพิเศษ'},
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
