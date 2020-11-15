import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService ) {
    console.log('constructor heroes');
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();

    console.log(this.heroes);
  }


}
