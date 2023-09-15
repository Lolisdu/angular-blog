import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})

export class ConteudoComponent implements OnInit {
photoCover:string = ""
conteudoTitle:string = ""
conteudoText:string = "" 
private id:string | null = "0"

  constructor (
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
     )
 
     this.setValuesToComponent(this.id)
   }
 
   setValuesToComponent(id:string | null){
     const result = dataFake.filter(article => article.id == id)[0]
 
     this.conteudoTitle = result.title
     this.conteudoText = result.subtitle
     this.photoCover = result.photoCover
  }
}

