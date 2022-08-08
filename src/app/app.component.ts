import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { faAndroid, faApple, faAppStoreIos, faLinux, faNeos, faPlaystation, faWindows, faXbox } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'rawg';
  allGames: any
  allGenres: any
  screenshoots: any

  parentPlatforms = [
    {id: 1, name: 'PC', icon: faWindows},
    {id: 2, name: 'PlayStation', icon: faPlaystation},
    {id: 3, name: 'Xbox', icon: faXbox},
    {id: 4, name: 'iOS', icon: faAppStoreIos},
    {id: 5, name: 'Apple', icon: faApple},
    {id: 6, name: 'Linux', icon: faLinux},
    {id: 7, name: 'Nintendo', icon: faNeos},
    {id: 8, name: 'Android', icon: faAndroid},
  ]

  constructor(private api: ApiService) {
  }
  onEnterPress(event:any){
    if(event.key === "Enter" && event.target.value != ''){
      this.search(event.target.value)
    }
  }
  search(text: string) {
    this.api.getAllGames('https://api.rawg.io/api/games?key=b8ad8f5229d341129fc02d6db014e29b&search_exact&search='+text).subscribe(response => {this.allGames = response; })
  }
  ngOnInit(): void {
    this.api.getAllGames('https://api.rawg.io/api/games?key=b8ad8f5229d341129fc02d6db014e29b&page_size=30').subscribe(response => {this.allGames = response;})
    this.api.getAllGames('https://api.rawg.io/api/genres?key=b8ad8f5229d341129fc02d6db014e29b').subscribe(response => {this.allGenres = response; })
  }
  onScroll(url:string) {
    if(url != null) {
      this.api.getAllGames(url).subscribe(response => this.allGames = response)
    }
  }
  onPlatformSearch(platform:any) {
    this.api.getAllGames('https://api.rawg.io/api/games?key=b8ad8f5229d341129fc02d6db014e29b&page_size=30&parent_platforms=' + platform).subscribe(response => {this.allGames = response;})
  }
  onGenreSearch(genre: any) {
    this.api.getAllGames('https://api.rawg.io/api/games?key=b8ad8f5229d341129fc02d6db014e29b&search_exact=true&page_size=30&genres=' + genre).subscribe(response => {this.allGames = response;})
  }
  getAllScreenshoots(id:any){
    this.api.getAllGames('https://api.rawg.io/api/games/' + id + '/screenshoots?key=b8ad8f5229d341129fc02d6db014e29b').subscribe(response => {this.screenshoots = response; })
  }
}
