import { Component, OnInit } from '@angular/core';
import { TipService } from '../services/tip.service';
import { Tip } from '../interface/tip.interface';

@Component({
  selector: 'app-add-tips',
  templateUrl: './add-tips.component.html',
  styleUrls: ['./add-tips.component.css']
})
export class AddTipsComponent implements OnInit {

  tip : Tip = {
    name : '',
    tip : []
  }
  what : string = "Text"
  content : string = ""
  ad : boolean = false

  textname : string = ""
  error : string = ""

  size:number = 0

  constructor(private tipS:TipService) { }

  ngOnInit(): void {
  }

  setSize(size:number){
    this.size = size
    this.what = "Text"
    this.ad = true
  }

  addsep(){
    let sep = {
      id : this.tip.tip.length,
      desc : 'HR',
      name : 'hr'
    }
    this.tip.tip.push(sep)
  }

  add():number{
    if(this.textname.trim() === '' || this.content.trim() === ''){
      this.error = "Some field are empty"
      return 0;
    }
    if(this.what === "Text"){
      let text = {
        id : this.tip.tip.length,
        desc : this.textname,
        name : 'h' + this.size,
        content : this.content
      }
      this.tip.tip.push(text)
    }else if (this.what === "Code"){
      let text = {
        id : this.tip.tip.length,
        desc : this.textname,
        name : 'code',
        content : this.content
      }
      this.tip.tip.push(text)
    }else {
      let text = {
        id : this.tip.tip.length,
        desc : this.textname,
        name : 'important',
        content : this.content
      }
      this.tip.tip.push(text)
    }
    this.ad = false
    return 0
  }

  addCode(cc:string){
    this.what = cc
    this.ad = true
  }

  share(){
    this.tipS.add(this.tip)
  }


}
