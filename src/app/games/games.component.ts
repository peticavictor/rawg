import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent {
  response:AppComponent

  constructor(mainComponent: AppComponent) { 
    this.response = mainComponent
  }
  scrollToTop(){
    window.scrollTo(0,0)
  }
}
