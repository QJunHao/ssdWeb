import { Component, OnInit } from '@angular/core';
import { MatchService } from '../service/match.service';
import { Prediction, PredictionAdapter } from '../models/Prediction.model';
import { Router, ActivatedRoute} from '@angular/router';

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

	constructor(private matchService: MatchService, private router: Router) { }

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
	    	console.log(data)
	    	for ( const item in (data)) {
	    		this.predictionResponse.push(data[item]);
	    	}
	    });
	    this.voteMsg = localStorage.getItem("voteMsg")
	    localStorage.removeItem("voteMsg")
	}
	vote(match_id, team_id){
		let currentUserSession = JSON.parse(localStorage.getItem('currentUser'))

		this.prediction.match_id = match_id
		this.prediction.prediction = team_id
		this.prediction.username = currentUserSession.username

	  	this.matchService.vote(this.prediction).subscribe(
	    data => {
			this.voteMsg = "You have successfully casted your vote."
			localStorage.setItem("voteMsg", this.voteMsg)
			//window.location.href = 'matchPoll';
	    });
	}
	public existingVoteFound(){
		console.log("changed")
		this.existingvoteFound = true
	}
}
