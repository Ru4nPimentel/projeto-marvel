import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComicsService } from './comics.service';
import { Comics } from './comics';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  title = "Histórias";
  historia:Comics;
  pag:number;
  arrayComics:any = [];
  @ViewChild ('inputBuscar') inputBuscar:ElementRef;

  constructor(private comicsService:ComicsService ,private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.LoadComics('',this.activatedRoute.snapshot.params.comicPg || 0);
  }

  clickBuscar(){
    this.inputBuscar.nativeElement.classList.toggle('ativo');
  }

  LoadComics(titleComic:string,peg:number){
    this.arrayComics = [];
    this.comicsService.buscarComics(titleComic,peg).subscribe(historia =>{
      this.historia = historia;
      console.log(this.historia);
      historia.data.results.forEach((comic,index) => {
        this.arrayComics[index] = comic;
      });
    })
  }

  buscarKeyUp(digitoHqs:string){
    this.LoadComics(digitoHqs,this.activatedRoute.snapshot.params.comicPg || 0);
  }

  nextPg(){
    if(this.activatedRoute.snapshot.params.comicPg > 0){
      this.pag = parseInt(this.activatedRoute.snapshot.params.comicPg || 0) + 1;
      this.router.navigate(['/comics/'+this.pag]);
    }else{
      this.pag = 2;
      this.router.navigate(['/comics/2']);
    }

    this.LoadComics('',this.pag)
  }

  backPg(){
    if(this.activatedRoute.snapshot.params.comicPg > 1){
      this.pag = parseInt(this.activatedRoute.snapshot.params.comicPg) - 1;
      this.router.navigate(['/comics/'+this.pag])
    }else{
      this.pag = 1;
      this.router.navigate(['/comics/1']);
    }
    this.LoadComics('',this.pag)
  }

}
