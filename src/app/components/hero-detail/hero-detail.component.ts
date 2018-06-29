import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/heroes';
import { HeroserviceService } from '../../services/heroservice/heroservice.service';
import { Location } from '@angular/common';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
    private heroService: HeroserviceService,
    private location: Location) { }


  ngOnInit() {
    console.log("hello");
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.params['id'];
    console.log("going to get " + id);
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
