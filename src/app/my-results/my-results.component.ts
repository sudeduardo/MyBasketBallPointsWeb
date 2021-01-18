import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/Game.service';
import {Results} from '../models/Results';
@Component({
  selector: 'app-my-results',
  templateUrl: './my-results.component.html',
  styleUrls: ['./my-results.component.sass']
})
export class MyResultsComponent implements OnInit {
  
  public results:Results;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.results().subscribe(data =>{
      this.results = data;
    })
  }

}
