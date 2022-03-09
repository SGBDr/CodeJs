import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Puzzle } from '../interface/puzzle.interface';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  @Input()
  public puzzle! : Puzzle
  star = '';

  constructor(private router : Router) { }


  Solve() : void {
    this.router.navigate(['home/solve/' + this.puzzle.id])
  }

  ngOnInit(): void {
    if(this.puzzle.diff.toLowerCase() === "easy")this.star = '⭐'.repeat(1)
    if(this.puzzle.diff.toLowerCase() === "medium")this.star = '⭐'.repeat(2)
    if(this.puzzle.diff.toLowerCase() === "hard")this.star = '⭐'.repeat(3)
    if(this.puzzle.diff.toLowerCase() === "too hard")this.star = '⭐'.repeat(4)
  }

}
