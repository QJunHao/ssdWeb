import { Component, ViewChild, ViewChildren, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player.service';
import { Player } from '../../models/Player.model';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dota-player',
  templateUrl: './dota-player.component.html',
  styleUrls: ['./dota-player.component.css']
})
export class DotaPlayerComponent implements OnInit {
  displayedColumns = ['name', 'image_url', 'first_name', 'last_name', 'team_name', 'hometown']
  dataSource: MatTableDataSource<Player>;
  player = []

  @ViewChild(MatPaginator, { static : false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static : false }) sort: MatSort;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  	this.playerService.getDotaPlayer().subscribe(data => {
      for ( const item in (data)) {
        if (data[item]["first_name"] != "No Record Found")
          this.player.push(data[item]);
      }
      this.dataSource = new MatTableDataSource(this.player);
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
