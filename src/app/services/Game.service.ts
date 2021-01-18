import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';;

import {Game} from "../models/Game"

import { environment } from 'src/environments/environment';
import { Results } from '../models/Results';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseURL = `${environment.url_api}/Games`;

  constructor(private http: HttpClient) {
    
   }

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseURL);
  }

  getById(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.baseURL}/${id}`);
  }

  post(game: Game) {
    return this.http.post<Game>(this.baseURL, game);
  }

  put(game: Game) {
    return this.http.put(`${this.baseURL}/${game.id}`, game);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  results() :Observable<Results>{
    return this.http.get<Results>(`${this.baseURL}/results`);
  }
}

