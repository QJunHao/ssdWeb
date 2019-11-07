import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-lol-player',
  templateUrl: './lol-player.component.html',
  styleUrls: ['./lol-player.component.css']
})
export class LolPlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }
  player = []

  ngOnInit() {
  	this.playerService.getLolPlayer().subscribe(data => {
      for ( const item in (data)) {
        this.player.push(data[item]);
      }
    });
  }
}
