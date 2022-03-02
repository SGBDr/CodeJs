import { Component, OnInit, ViewChild } from '@angular/core';
import { PuzzleService } from '../puzzle.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
      'All',
      'JS',
      'Java',
      'PHP'
    ],
    [
      'All',
      'HTML',
      'CSS'
    ]
  ]

  public index_languages : number = 0
  public index_types :number = 0

  constructor(public puzS : PuzzleService) { }

  change() : void {
    if(this.index_types === 0){
      this.index_languages = 1
      this.index_types = 1
    }
    else {
      this.index_languages = 0
      this.index_types = 0
    }
  }

  ngOnInit(): void {
  }

}
