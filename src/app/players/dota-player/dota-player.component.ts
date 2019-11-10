import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-dota-player',
  templateUrl: './dota-player.component.html',
  styleUrls: ['./dota-player.component.css']
})
export class DotaPlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  player = []

  ngOnInit() {
  	this.playerService.getDotaPlayer().subscribe(data => {
      for ( const item in (data)) {
        if (data[item]["first_name"] != "No Record Found")
          this.player.push(data[item]);
      }
    });
  }
}
