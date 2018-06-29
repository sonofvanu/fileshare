import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes';
import { HEROES } from './mock-heroes';
import { HeroserviceService } from '../../services/heroservice/heroservice.service';
import { MessageserviceService } from '../../services/messageservice/messageservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroserviceService, private messageService: MessageserviceService, private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  title = 'EAZIBIZ';

  selectedHero: Hero;

  singleHero: Hero = {
    id: 12,
    name: 'Shakthi'
  };

  heroes: Hero[];

  onSelect(Ahero: Hero): void {
    this.router.navigate(['/hero', Ahero.id]);
    // this.selectedHero=Ahero;
    // this.messageService.add('Communicating service.....Fetching details of '+Ahero.name);
  }

  getHeroes(): void {
    console.log('hi');
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
