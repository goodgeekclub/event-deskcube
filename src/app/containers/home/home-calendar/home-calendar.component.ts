import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.css']
})
export class HomeCalendarComponent implements OnInit {
  morning: string[] = ['timeMorning', 'dataMorning'];
  dataSourceMorning =[
    {timeMorning: '08:30', dataMorning: 'ลงทะเบียน'},
    {timeMorning: '08:45', dataMorning: 'เเจ้งกำหนดการภาพรวม เเละ กำหนดการกิจกรรม'},
    {timeMorning: '09:00 ', dataMorning: 'กิจกรรมสร้างความสัมพันธ์'},
    {timeMorning: '10:00 ', dataMorning: 'ความรู้พื้นฐานการใช้งาน'},
    {timeMorning: '11:30', dataMorning: 'พักกลางวัน'},
    {timeMorning: '13:00', dataMorning: 'กิจกรรมผ่อนคลาย'},
    {timeMorning: '14:00', dataMorning: 'Work Shop การใช้ Google'},
    {timeMorning: '16:00', dataMorning: 'Create Portfolio Online'},
    {timeMorning: '19:30', dataMorning: 'Set Zero & กิจกรรมพิเศษ'},
  ];
  afternoon: string[] = ['timeAfternoon', 'dataAfternoon'];
  dataSourceAfternoon =[
    {timeAfternoon: '08:30', dataAfternoon: 'ลงทะเบียน'},
    {timeAfternoon: '08:45', dataAfternoon: 'กิจกรรมพิเศษ'},
    {timeAfternoon: '09:30', dataAfternoon: 'ความรู้พื้นฐานเกี่ยวกับการออกเเบบ'},
    {timeAfternoon: '10.30', dataAfternoon: 'วิทยากรพิเศษ'},
    {timeAfternoon: '12:00', dataAfternoon: 'พักกลางวัน'},
    {timeAfternoon: '13:00', dataAfternoon: 'กิจกรรมผ่อนคลาย'},
    {timeAfternoon: '13:30', dataAfternoon: 'Basic game developer'},
    {timeAfternoon: '15:45', dataAfternoon: 'วิทยากรพิเศษ'},
    {timeAfternoon: '19:30', dataAfternoon: 'Set Zero & กิจกรรมพิเศษ'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  timeMorning: string;
  dataMorning: string;
  timeAfternoon :string;
  dataAfternoon : string;
}

