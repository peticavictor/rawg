import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { faAngleDown, faAngleUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  response:AppComponent
  angleDownIcon = faAngleDown;
  showAllGenres: boolean = false
  
  showElements() {
    this.showAllGenres = !this.showAllGenres
    this.angleDownIcon = this.showAllGenres ? faAngleUp : faAngleDown;
  }

  constructor(mainComponent: AppComponent) { 
    this.response = mainComponent
   }
}
