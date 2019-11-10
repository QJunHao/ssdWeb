import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { JwtInterceptor } from './helper/jwt.interceptor';
import { ErrorInterceptor } from './helper/error.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

import { PollHistoryComponent } from './poll-history/poll-history.component';

import { ProfileComponent } from './profile/profile.component';
//import { HeaderComponent } from './header/header.component';
import { DotaComponent } from './tournaments/dota/dota.component';
import { LolComponent } from './tournaments/lol/lol.component';
import { DotaMatchesComponent } from './matches/dota-matches/dota-matches.component';
import { LolMatchesComponent } from './matches/lol-matches/lol-matches.component';
import { DotaPlayerComponent } from './players/dota-player/dota-player.component';
import { LolPlayerComponent } from './players/lol-player/lol-player.component';
import { FlairComponent } from './flair/flair.component';

import { MatchPollComponent } from './match-poll/match-poll.component';

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetEmailComponent } from './reset-email/reset-email.component';
import { FlairViewComponent } from './flair-view/flair-view.component';

import { ModalModule } from './_modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule } from '@angular/material'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    //HeaderComponent,
    DotaComponent,
    LolComponent,
    DotaPlayerComponent,
    LolPlayerComponent,
    FlairComponent,
    MatchPollComponent,
    ResetPasswordComponent,
    ResetEmailComponent,
    FlairViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
