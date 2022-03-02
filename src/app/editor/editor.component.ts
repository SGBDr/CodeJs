import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Subject, Subscriber } from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input()
  public content! : String
  public test : Boolean = true
  @ViewChild('edit')
  public edit! : Element

  @Input()
  public lan! : String

  @Input()
  public diff! : String

  public con = new Subject<any>()

  constructor() {}

  emit() {this.con.next(0)}

  toggle() : void{
    this.test = !this.test;
  }

  change(){
    this.emit()
  }

  ngOnInit(): void {

  }

}
