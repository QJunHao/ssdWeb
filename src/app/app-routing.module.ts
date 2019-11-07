import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

import { DotaComponent } from './tournaments/dota/dota.component';
import { LolComponent } from './tournaments/lol/lol.component';

import { DotaMatchesComponent } from './matches/dota-matches/dota-matches.component';
import { LolMatchesComponent } from './matches/lol-matches/lol-matches.component';

import { DotaPlayerComponent } from './players/dota-player/dota-player.component';
import { LolPlayerComponent } from './players/lol-player/lol-player.component';

import { PollResultComponent } from './poll-result/poll-result.component';
import { PollHistoryComponent } from './poll-history/poll-history.component';

import { MatchPollComponent } from './match-poll/match-poll.component';
import { MatchViewComponent } from './match-view/match-view.component';

import { FlairComponent } from './flair/flair.component';

import { ProfileComponent } from './profile/profile.component';

import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
	{ path: '', component: LoginComponent},
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService] },

	{ path: 'dotaTournament', component: DotaComponent, canActivate:[AuthGuardService]  },
	{ path: 'lolTournament', component: LolComponent, canActivate:[AuthGuardService]  },

	{ path: 'dotaMatch', component: DotaMatchesComponent, canActivate:[AuthGuardService]  },
	{ path: 'lolMatch', component: LolMatchesComponent, canActivate:[AuthGuardService]  },

	{ path: 'dotaPlayer', component: DotaPlayerComponent, canActivate:[AuthGuardService]  },
	{ path: 'lolPlayer', component: LolPlayerComponent, canActivate:[AuthGuardService]  },

	{ path: 'pollResult', component: PollResultComponent, canActivate:[AuthGuardService]  },
	{ path: 'pollHistory', component: PollHistoryComponent, canActivate:[AuthGuardService]  },
	{ path: 'matchPoll', component: MatchPollComponent, canActivate:[AuthGuardService]  },
	{ path: 'matchView', component: MatchViewComponent, canActivate:[AuthGuardService]  },

	{ path: 'flair', component: FlairComponent, canActivate:[AuthGuardService]  },
	
	{ path: 'profile', component: ProfileComponent, canActivate:[AuthGuardService]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
	LoginComponent,
	LogoutComponent,
	RegisterComponent,

	DotaComponent, 
	LolComponent,

	DotaMatchesComponent,
	LolMatchesComponent,

	DotaPlayerComponent,
	LolPlayerComponent,

	PollResultComponent,
	PollHistoryComponent,
	MatchPollComponent,
	MatchViewComponent,

	FlairComponent,
	ProfileComponent
]