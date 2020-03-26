import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { PersonagemService } from '../personagem/personagem.service';
import {  Personagem } from '../personagem/personagem';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.scss']
})
export class PersonagemComponent implements OnInit {
  title = "Lista de Herói";
  char: Personagem;
  pag:number;
  arrayPerson:any = [];
  @ViewChild ('inputBuscar') inputBuscar:ElementRef ;

  constructor( private personagemService:PersonagemService, private activatedRoute: ActivatedRoute, private router:Router) { }


  ngOnInit(): void {
    this.loadAPI('',this.activatedRoute.snapshot.params.characterPg || 0);
  }

  loadAPI(nameHero:string,peg:number){
    this.arrayPerson = [];
    this.personagemService.buscarPersonagens(nameHero,peg).subscribe(person =>{
      this.char = person;
      this.char.data.results.forEach((personObject,index)=>{
         this.arrayPerson[index] = personObject;
      })
    })
  }

  clickBuscar(){
    this.inputBuscar.nativeElement.classList.toggle('ativo');
  }

  buscarKeyUp(digitoPerson:string){
    this.loadAPI(digitoPerson,this.activatedRoute.snapshot.params.characterPg || 0);
  }

  nextPg(){
    if(this.activatedRoute.snapshot.params.characterPg > 0){
      this.pag = parseInt(this.activatedRoute.snapshot.params.characterPg || 0) + 1;
      this.router.navigate(['/character/'+this.pag]);
    }else{
      this.pag = 2;
      this.router.navigate(['/character/2']);
    }

    this.loadAPI('',this.pag)
  }

  backPg(){
    if(this.activatedRoute.snapshot.params.characterPg > 1){
      this.pag = parseInt(this.activatedRoute.snapshot.params.characterPg) - 1;
      this.router.navigate(['/character/'+this.pag])
    }else{
      this.pag = 1;
      this.router.navigate(['/character/1']);
    }
    this.loadAPI('',this.pag)
  }

}
