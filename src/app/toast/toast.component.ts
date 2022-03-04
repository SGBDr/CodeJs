import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input()
  display! : Boolean

  @Input()
  test : string = ""

  @Input()
  good! : Boolean

  @Input()
  val! : any

  constructor() { 
  }

  close(): void {
    this.display = false
  }

  ngOnInit(): void {
  }

}
