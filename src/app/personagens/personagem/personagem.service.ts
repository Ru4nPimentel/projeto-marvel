import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Md5} from "md5-typescript";
import { Personagem } from './personagem';

const Api = 'https://gateway.marvel.com:443/v1/public/characters';
const Limit = "?limit=10";
let Paginacao;
const PublicKey ="68c28a25c13ef2c79e0c4549b358b716";
const PrivateKey = "2f62cd237e8267898e451ed8951ae01bdd160428";
const Hash = "&hash="+Md5.init(Date.now()+PrivateKey+PublicKey);



@Injectable({providedIn: 'root'})
export class PersonagemService{
  constructor(private http: HttpClient){
  }

  buscarPersonagens(nomeHero:string,pg:number){
    pg = +pg;
    if(nomeHero){
      return this.http.get<Personagem>(Api+'?name='+nomeHero+'&apikey='+PublicKey+Hash);
    }else{
      if(pg > 0){
        if(pg == 1){
          Paginacao = "&offset=" + 0;
        }else{
          Paginacao = "&offset="+(10 * pg);
        }
        return this.http.get<Personagem>(Api+Limit+Paginacao+'&apikey='+PublicKey+Hash);
      }else{
        Paginacao = "&offset="+ 0;
        return this.http.get<Personagem>(Api+Limit+Paginacao+'&apikey='+PublicKey+Hash);
      }
    }
  }

}
