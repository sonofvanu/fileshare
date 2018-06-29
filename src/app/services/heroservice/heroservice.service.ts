import { Injectable } from '@angular/core';
import { Hero } from '../../components/heroes/heroes';
import { HEROES } from '../../components/heroes/mock-heroes';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { MessageserviceService } from '../messageservice/messageservice.service';


@Injectable()
export class HeroserviceService {

  constructor(private messageService:MessageserviceService) { }

  getHeroes():Observable<Hero[]>
  {
    this.messageService.add('HeroService Communicating.....Fetched Heroes');
    return of(HEROES);
  }
  getHero(id:number):Observable<Hero>
  {
    this.messageService.add('fetching the details of hero id=${id}');
    return of(HEROES.find(hero=>hero.id===id));
  }
  

}
