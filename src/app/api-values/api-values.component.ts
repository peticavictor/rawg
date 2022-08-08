import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-values',
  templateUrl: './api-values.component.html',
  styleUrls: ['./api-values.component.scss']
})
export class ApiValuesComponent implements OnInit {

  // allGames: any = []
  
  constructor(private api: ApiService) {
    // this.api.getAllGames().subscribe(data => console.log(data))
   }

  ngOnInit(): void {
    // this.api.getAllGames().subscribe(response => this.allGames = response)
    // console.log(this.allGames.nofollow)
  }

}
