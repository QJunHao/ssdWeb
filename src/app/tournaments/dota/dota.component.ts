import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../service/tournament.service';

//import { MatPaginator } from '@angular/material/paginator';
//import { MatSort } from '@angular/material/sort';
//import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dota',
  templateUrl: './dota.component.html',
  styleUrls: ['./dota.component.css']
})
export class DotaComponent implements OnInit {


  constructor(private tournamentService: TournamentService) { }
  tournament = []

  ngOnInit() {
	  this.tournamentService.getDotaTournament().subscribe(data => {
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