import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tip } from '../interface/tip.interface';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  TipSubject = new Subject<Tip[]>()
  tips : Tip[] = []

  constructor(private http:HttpClient) { 
    this.emitTips()
  }

  emitTips(){
    this.TipSubject.next(this.tips)
  }

  getTips(){
    this.http.get<Tip[]>("https://codejs-5d8e7-default-rtdb.firebaseio.com/tips.json").subscribe(
      (x: Tip[]) => {
        console.log(x)
        if(x){
          console.log(x)
          this.tips = x
          this.emitTips()
        }
      }
    )
  }

  add(tip : Tip){
    this.http.put("https://codejs-5d8e7-default-rtdb.firebaseio.com/tips/0.json", tip).subscribe(
      x => {
        
      }
    )
  }
}
