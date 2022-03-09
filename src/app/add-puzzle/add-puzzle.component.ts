import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Test } from '../interface/test.interface';
import * as ace from "ace-builds";
import { Compiler } from '../exec/Compil';
import { Puzzle } from "../interface/puzzle.interface"
import { Router } from '@angular/router';
import { PuzzleService } from '../services/puzzle.service.service';

@Component({
  selector: 'app-add-puzzle',
  templateUrl: './add-puzzle.component.html',
  styleUrls: ['./add-puzzle.component.css']
})
export class AddPuzzleComponent implements OnInit {

  @ViewChild("edtmin") e1!: ElementRef<HTMLElement>;
  @ViewChild("edtverif") e2!: ElementRef<HTMLElement>;
  @ViewChild("edtsolve") e3!: ElementRef<HTMLElement>;

  toasts : any[] = []

  name : string = ""
  preview : string = ""
  desc : string = ""
  diff : string = ""
  kind : string = ""
  note : string = ""

  a1 : any
  a2 : any 
  a3 : any 

  constrains : string = ""
  tip : string = ""
  cons : any[] = []
  tips : any[] = []
  tests : Test[] = []

  c1 : string = ""
  c2 : string = ""
  c3 : string = ""

  error_test : string | unknown = ""

  outmin : string | unknown = ""
  outverif : string | unknown = ""
  outsolve : string | unknown = ""

  nbre_v_test = 0

  options = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
  }

  compiler = new Compiler()

  constructor(private puS : PuzzleService, private route : Router) {}

  ngAfterViewInit():void {
    ace.config.set("fontSize", "14px");

    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    this.a1 = ace.edit(this.e1.nativeElement);
    this.a2 = ace.edit(this.e2.nativeElement);
    this.a3 = ace.edit(this.e3.nativeElement);

    this.a1.setOptions(this.options);
    this.a2.setOptions(this.options);
    this.a3.setOptions(this.options);

    this.a1.getSession().setMode("ace/mode/javascript");
    this.a1.setTheme('ace/theme/twilight');
    this.a2.getSession().setMode("ace/mode/javascript");
    this.a2.setTheme('ace/theme/twilight');
    this.a3.getSession().setMode("ace/mode/javascript");
    this.a3.setTheme('ace/theme/twilight');
    
    this.a1.addEventListener('change', () => {
      this.a3.getSession().setValue(this.a1.getSession().getValue())
    })

    this.a1.getSession().setValue(this.puS.coffP.minP)
    this.a2.getSession().setValue(this.puS.coffP.minV)
  }

  addCon(con : string){
    if(con.trim() !== "" && con.trim().length >= 6)this.cons.push([this.cons.length, con])
  }

  addTips(tip : string){
    if(tip.trim() !== "" && tip.trim().length >= 6)this.tips.push([this.tip.length, tip])
  }

  addTests():void{
    try{
      if(this.c1.trim() !== '' && eval(this.c2) && eval(this.c3)){
        this.tests.push(
          {
            id : this.tests.length,
            name : this.c1,
            input : this.c2,
            output : this.c3
          }
        )
      }
      this.error_test = ''
    }catch(e){
      this.error_test = e
    }
  }

  runVerif1(text:string){
    this.outmin = this.compiler.verify(text)
    return "The code is OK." === this.outmin ? true : false
  }

  runVerif2(text:string){
    this.outverif = this.compiler.verify(text)
    return "The code is OK." === this.outverif ? true : false
  }

  runTest(){
    let y = ""
    this.outsolve = ""
    for(let t of this.tests){
      let o = t.name
      let x = ''+this.compiler.testAdd(t, this.a3.getSession().getValue(),this.a2.getSession().getValue(), this.toasts)
      if(x[0] === ">")this.nbre_v_test++
      this.outsolve += "\n" + o + "\n" + x
    }
  }

  sharPuzzle(){
    let temp_p : Puzzle = {
      id : this.puS.puzzles.length,
      name : this.name,
      preview : this.preview,
      desc : this.desc,
      test : this.tests,
      code_min : this.a1.getSession().getValue(),
      code_very : this.a2.getSession().getValue(),
      code_solve : this.a3.getSession().getValue(),
      lan : 'JS',
      diff : this.diff,
      kind : this.kind,
      note : this.note,
      contrains : this.cons,
      tips : this.tips,
      display : true
    }
    this.puS.addP(temp_p)
    this.route.navigate(['/home'])
  }

  deleteCon(id:number){
    this.cons.splice(id, 1)
  }

  deleteTip(id:number){
    this.tips.splice(id, 1)
  }

  deleteTests(id:number){
    this.tests.splice(id, 1)
  }

  ngOnInit(): void {
  }

}
