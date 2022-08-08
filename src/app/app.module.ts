import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { ApiValuesComponent } from './api-values/api-values.component';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', component: HomeComponent, title: 'Home'},
  {path: '**', component: NotFoundComponent, title: 'Not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApiValuesComponent,
    GamesComponent,
    GameComponent,
    NotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    [RouterModule.forRoot(routes)],
    FontAwesomeModule,
    InfiniteScrollModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
