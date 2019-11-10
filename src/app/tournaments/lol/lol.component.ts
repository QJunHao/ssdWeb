import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../service/tournament.service';

@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.css']
})
export class LolComponent implements OnInit {

  constructor(private tournamentService: TournamentService) { }
  tournament = []

  ngOnInit() {
  	 this.tournamentService.getLolTournament().subscribe(data => {
        for ( const item in (data)) {
          this.tournament.push(data[item]);
        }
        this.tournament.forEach(function (value) {
        value.begin_at = value.begin_at.substring(0, 10)
        value.end_at = value.end_at.substring(0, 10)
      }); 
    });
  }
}
