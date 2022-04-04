import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tip } from '../interface/tip.interface';
import { TipService } from '../services/tip.service';

@Component({
  selector: 'app-see-tip',
  templateUrl: './see-tip.component.html',
  styleUrls: ['./see-tip.component.css']
})
export class SeeTipComponent implements OnInit {

  tip! : Tip
  sub = new Subscription()
  id : number = -1;

  constructor(private route : ActivatedRoute, private tipS : TipService) {
    this.sub = this.tipS.TipSubject.subscribe(x => {
      this.id = parseInt(this.route.snapshot.params['id'])
      this.tip = x[this.id]
    })
  }

  ngOnInit(): void {
    this.tipS.getTips()
  }
}
