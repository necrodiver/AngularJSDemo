import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHerosSlowly().then(heroes => this.heroes = heroes);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
