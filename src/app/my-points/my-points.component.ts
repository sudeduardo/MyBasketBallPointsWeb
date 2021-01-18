import { Component, OnInit, TemplateRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Game} from "../models/Game"
import {GameService} from '../services/Game.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-my-points',
  templateUrl: './my-points.component.html',
  styleUrls: ['./my-points.component.sass']
})

export class MyPointsComponent implements OnInit {
  
  modalRef: BsModalRef;
  
  constructor(private fb: FormBuilder, private gameService: GameService, private modalService: BsModalService) {
    this.GameForm = fb.group({
      'date': ['',Validators.required],
      'points': ['',Validators.required]
    });
  }
  
  public openFormGame:boolean = false;
  
  public  GameForm:FormGroup;
  
  public gameSelected?: any;
  
  public games:Game[];
  
  ngOnInit(): void {
    this.loadGames();
    
  }
  
  public loadGames(){
    this.gameService.getAll().subscribe((games: Game[]) => {
      console.log(games);
      this.games = games;
    });
  }
  
  public  confirmModalDeleteGame() {
    this.gameService.delete(this.gameSelected.id).subscribe(()=>{
      this.loadGames();
      this.closeModalDeleteConfirm();
    });
    
  };
  
  public  submitGame() {
    let game:Game = this.GameForm.value;
    this.gameService.post(game).subscribe(()=>{
      this.GameForm.reset();
      this.loadGames();
      this.openFormGame = false;
    });
  };
  
  openModalDeleteConfirm(template: TemplateRef<any>, game:Game) {
    this.gameSelected= game;
    this.modalRef = this.modalService.show(template);
  }
  
  closeModalDeleteConfirm(){
    this.gameSelected= null;
    this.modalRef.hide();
  }
  
}

