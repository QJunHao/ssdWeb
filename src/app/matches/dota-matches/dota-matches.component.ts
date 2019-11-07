import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MatchService } from '../../service/match.service';

@Component({
  selector: 'app-dota-matches',
  templateUrl: './dota-matches.component.html',
  styleUrls: ['./dota-matches.component.css']
})
export class DotaMatchesComponent implements OnInit {

  constructor(private matchService: MatchService, private router: Router) { }

  match = []

  ngOnInit() {
  	this.matchService.getDotaMatch().subscribe(data => {
      for ( const item in (data)) {
        this.matchService.getRelatedOpponents(data[item]["match_id"]).subscribe(
        result => {
          if(result.length == 2){
            this.match.push(data[item]);
          }
        });
      }
    });
  }
  public getOpponentFromMatch(matchId){
    this.matchService.getRelatedOpponents(matchId).subscribe(
        data => {
          localStorage.setItem("matchID", matchId)
          this.router.navigate(['/matchPoll']);
    });
  }
}