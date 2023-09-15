import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.css']
})
export class CardSmallComponent implements OnInit{
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  Id: string= "0"


  constructor(){ }

  ngOnInit(): void {
  }

}
