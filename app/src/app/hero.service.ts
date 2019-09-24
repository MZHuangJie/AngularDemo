import { Injectable } from '@angular/core';
import { Hero } from './hero/hero';
import { HEROES } from './hero/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessagesService
    ) {}
  private heroesUrl = 'api/heroes';
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: frtched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
