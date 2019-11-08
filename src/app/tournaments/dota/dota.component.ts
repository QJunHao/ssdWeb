import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../service/tournament.service';

@Component({
  selector: 'app-dota',
  templateUrl: './dota.component.html',
  styleUrls: ['./dota.component.css']
})
export class DotaComponent implements OnInit {

  settings = {
    columns: {
      No: {
        title: 'No.'
      },
      Title: {
        title: 'Title'
      },
      League: {
        title: 'League'
      },
      Series: {
        title: 'Series'
      },
      Start: {
        title: 'Date started'
      },
      End: {
        title: 'Date end'
      },
      Information: {
        title: 'More information'
      }
    }
  };


  constructor(private tournamentService: TournamentService) { }
  tournament = []

  ngOnInit() {
	  this.tournamentService.getDotaTournament().subscribe(data => {
      for ( const item in (data)) {
        this.tournament.push(data[item]);
      }
    });
  }
}