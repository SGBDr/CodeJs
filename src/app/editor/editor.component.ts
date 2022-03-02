import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as $ from 'jquery';

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

  constructor() { }

  toggle() : void{
    this.test = !this.test;
  }

  ngOnInit(): void {

  }

}
