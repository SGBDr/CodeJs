import { Component, OnInit, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { min, Subscription } from 'rxjs';
import { Puzzle } from '../interface/puzzle.interface';
import { PuzzleService } from '../puzzle.service.service';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {

  @ViewChild('editor')
  public editor! : any

  error : String | unknown = "No Error Yet"

  puzz! : Puzzle

  toasts : any[] = []

  test_i! : Number[]

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

  async startTest(id : number) {
    this.test_i[id] = 1
    let t = this.puzz.test[id]
    let output = "Expected : "
    try{
      let got = new (eval('(' + this.editor.content + ')'))
      let verif = new (eval('(' + this.puzz.code_very.toString() + ')'))

      let start = new Date()
      let r = got.test(t.input)
      let end = new Date()
      let time = end.getTime() - start.getTime()

      output += t.output + "\n"
      output += "Got : " + r + "\n \n"
      output += "Time left ~ " + time
      this.error = output

      let good = verif.test(t.output, r)

      if(good)this.test_i[id] = 2
      else this.test_i[id] = 3
      this.toasts.push([t.name, true, good])
    }catch(e){
      this.error = e
      this.test_i[id] = 3
    }
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

  ngOnInit(): void {
    let inter = setInterval(() => {
      if(this.editor){
        this.editor.content = this.puzz.code_min
        this.change = this.editor.con.subscribe(() => {
          this.test_i = ' '.repeat(this.puzz.test.length).split('').map(x => 0)
          this.toasts = []
        })
        clearInterval(inter)
      }
    })
  }

}