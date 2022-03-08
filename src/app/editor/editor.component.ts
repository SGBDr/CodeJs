import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import * as ace from "ace-builds";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @ViewChild("editor") editor!: ElementRef<HTMLElement>;

  @Input()
  public aceEditor! : any
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

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "15px");

    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    this.aceEditor = ace.edit(this.editor.nativeElement);

    this.aceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
    });

    this.aceEditor.getSession().setMode("ace/mode/javascript");
    this.aceEditor.setTheme('ace/theme/twilight');
    
    this.aceEditor.addEventListener('change', () => {
      this.emit()
    })
  }

  toggle() : void{
    this.test = !this.test;
  }

  ngOnInit(): void {}

}
