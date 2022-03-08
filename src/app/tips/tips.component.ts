import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  addTips():void {
    this.router.navigate(['share/tips/add'])
  }

}
