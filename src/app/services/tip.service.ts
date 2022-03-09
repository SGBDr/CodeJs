import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tip } from '../interface/tip.interface';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  constructor(private http:HttpClient) { }

  add(tip : Tip){
    this.http.put("https://codejs-5d8e7-default-rtdb.firebaseio.com/tips/0.json", tip).subscribe(
      x => {
        
      }
    )
  }
}
