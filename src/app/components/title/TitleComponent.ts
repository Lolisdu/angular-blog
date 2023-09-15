import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: [
    './title.component.css']
})
export class TitleComponent  implements OnInit{
    photo: string = "/my-blog/src/Imagem/logode.png"
    
  constructor() { }
  ngOnInit(): void {
    
  }
}
