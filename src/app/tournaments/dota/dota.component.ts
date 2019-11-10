import { Component, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { TournamentService } from '../../service/tournament.service';
import { Tournament } from '../../models/Tournament.model';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dota',
  templateUrl: './dota.component.html',
  styleUrls: ['./dota.component.css']
})
export class DotaComponent implements OnInit {
  displayedColumns = ['tournament_name', 'league_id', 'series_id', 'begin_at', 'end_at']
  dataSource: MatTableDataSource<Tournament>;
  tournament = []

  @ViewChild(MatPaginator, { static : false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static : false }) sort: MatSort;

  constructor(private tournamentService: TournamentService) { }
  
  ngOnInit() {
	  this.tournamentService.getDotaTournament().subscribe(data => {
      for ( const item in (data)) {
        this.tournament.push(data[item]);
      }
      this.tournament.forEach(function (value) {
        value.begin_at = value.begin_at.substring(0, 10)
        value.end_at = value.end_at.substring(0, 10)
      }); 
      this.dataSource = new MatTableDataSource(this.tournament);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}