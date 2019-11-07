import { Component, OnInit } from '@angular/core';
import { MatchService } from '../service/match.service';
import { Prediction, PredictionAdapter } from '../models/Prediction.model';

@Component({
  selector: 'app-match-poll',
  templateUrl: './match-poll.component.html',
  styleUrls: ['./match-poll.component.css']
})
export class MatchPollComponent implements OnInit {

	prediction = {
	    username: null,
	    match_id: null,
	    prediction: null
	}

	matchId = localStorage.getItem('matchID')
	opponent = []
	predictionResponse = []
	existingvoteFound = false
	voteMsg = ""

	constructor(private matchService: MatchService) { }

	ngOnInit() {
		this.existingvoteFound = false
		this.matchService.getRelatedOpponents(this.matchId).subscribe(
	        data => {
	    	for ( const item in (data)) {
	    		this.opponent.push(data[item]);
	      	}
	    });
	    this.matchService.checkForExistingVote().subscribe(
	    data => {
	    	for ( const item in (data)) {
	    		this.predictionResponse.push(data[item]);
	    	}
	    });
	    console.log(this.existingvoteFound)
	}
	vote(match_id, team_id){
		let currentUserSession = JSON.parse(localStorage.getItem('currentUser'))

		this.prediction.match_id = match_id
		this.prediction.team_id = team_id
		this.prediction.username = currentUserSession.username

	  	this.matchService.vote(this.prediction).subscribe(
	    data => {
			this.voteMsg = "You have successfully casted your vote."
	    });
	}
	public existingVoteFound(){
		this.existingvoteFound = true
		console.log(this.existingvoteFound)
		
	}
}
