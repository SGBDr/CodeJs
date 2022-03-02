import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Puzzle } from '../interface/puzzle.interface';
import { PuzzleService } from '../puzzle.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public easy : Puzzle[] = []
  public medium : Puzzle[] = []
  public hard : Puzzle[] = []
  public tohard : Puzzle[] = []

  public difficulty = [
    'All',
    'Easy', 
    'Medium',
    'Hard',
    'Too Hard'
  ]

  public kind = [
    'Algorithmic',
    'Design UI/UX'
  ]

  public languages = [
    [
      'JS'
    ],
    [
      'All',
      'HTML',
      'CSS'
    ]
  ]

  @ViewChild('lan')
  public lan! : any

  puzzSubcription = new Subscription()
  name = ""

  public index_languages :number = 0
  public index_types :number = 0

  constructor(private puzS : PuzzleService) {
    this.puzzSubcription = this.puzS.puzzSubject.subscribe(x => {
      this.easy = []
      this.medium = []
      this.hard = []
      this.tohard = []
      
      x = x.filter(((x) => {
        if(x.name.toLowerCase().indexOf(this.name.toLowerCase()) >= 0)if(x.kind.toLowerCase() === this.kind[this.index_types].toLowerCase())return true 
        return false 
      }))

      x.map(y => {
        if(y.diff.toLowerCase() === 'easy')this.easy.push(y)
        else if(y.diff.toLowerCase() === 'medium')this.medium.push(y)
        else if(y.diff.toLowerCase() === 'hard')this.hard.push(y)
        else this.tohard.push(y)
      })
    })
    this.puzS.emit()
  }

  change1():void{
    this.puzS.emit()
  }

  change() : void {
    if(this.index_types === 0){
      this.index_languages = 1
      this.index_types = 1
    }
    else {
      this.index_languages = 0
      this.index_types = 0
    }
    this.puzS.emit()
  }

  ngOnInit(): void {
  }

}
