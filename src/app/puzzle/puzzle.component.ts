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

  constructor(private router : Router) { }


  Solve() : void {
    this.router.navigate(['solve/' + this.puzzle.id])
  }

  ngOnInit(): void {
  }

}
