import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/heroes';
import { HeroserviceService } from '../../services/heroservice/heroservice.service';

@Component({
  selector: 'app-dahboard',
  templateUrl: './dahboard.component.html',
  styleUrls: ['./dahboard.component.css']
})
export class DahboardComponent implements OnInit {

  heroes:Hero[]=[];
  constructor(private heroService:HeroserviceService) { }

  ngOnInit() {
  this.getHeroes();
  }
  

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes.slice(1,5));
  }

}
