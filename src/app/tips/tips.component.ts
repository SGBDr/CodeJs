import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { Tip } from '../interface/tip.interface';
import { TipService } from '../services/tip.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  subscription = new Subscription()
  tips : Tip[] = []

  constructor(public router : Router, private tipS : TipService) {
    this.subscription = this.tipS.TipSubject.subscribe(x => {
      this.tips = x
    })
  }

  open(index : number){
    this.router.navigate(['share/tips/open/' + index])
  }

  ngOnInit(): void {
    this.tipS.getTips()
  }

  addTips():void {
    this.router.navigate(['share/tips/add'])
  }

}
