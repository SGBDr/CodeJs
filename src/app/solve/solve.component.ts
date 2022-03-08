import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Compiler } from '../exec/Compil';
import { Puzzle } from '../interface/puzzle.interface';
import { PuzzleService } from '../services/puzzle.service.service';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {

  @ViewChild('editor')
  public editor! : any

  error : String | unknown = "No Error Yet"

  percent : number = 0

  puzz! : Puzzle

  toasts : any[] = []

  test_i! : number[]

  change = new Subscription()

  constructor(private route: ActivatedRoute, private puzS : PuzzleService) {
    let id = parseInt(route.snapshot.params['id'])
    for(let pus of this.puzS.puzzles){
      if(pus.id === id){
        this.puzz = pus
        this.test_i = ' '.repeat(pus.test.length).split('').map(x => 0)
        break
      }
    }
  }

  startTest(id : number) {
    let compiler = new Compiler()
    this.error = compiler.test(id, this.test_i, this.puzz, this.editor, this.toasts)
  }
  
  async main (){
      this.test_i = ' '.repeat(this.puzz.test.length).split('').map(x => 1)
      for(let t of this.puzz.test)this.startTest(t.id)
      
  }

  startAll(){
    return new Promise((resolve, reject) => {
      this.main()
    }).then(() => console.log('finish'))
  }

  getPercent(){
    let i = 0
    let n = this.test_i.length * 2
    for(let r of this.test_i)if(r === 2)i += 2
    return Math.round((i / n)*100)
  }

  ngOnInit(): void {}

  ngAfterViewInit():void{
    this.editor.aceEditor.session.setValue(this.puzz.code_min)
    this.change = this.editor.con.subscribe(() => {
      this.test_i = ' '.repeat(this.puzz.test.length).split('').map(x => 0)
      this.toasts = []
    })
  }

  dis():Boolean{
    let i = 0
    for(let y of this.test_i)i += y;
    return i === 2 * this.test_i.length
  }

}