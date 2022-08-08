import { Component, Input, OnInit } from '@angular/core';
import { faAndroid, faApple, faAppStoreIos, faLinux, faNeos, faPlaystation, faWindows, faXbox } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() game: any
  
  xBoxIcon = faXbox;
  playStationIcon = faPlaystation;
  windowsIcon = faWindows;
  linuxIcon = faLinux;
  iOSIcon = faAppStoreIos;
  androidIcon = faAndroid;
  appleIcon = faApple;
  nintendoIcon = faNeos; //icon is not nintendo...

  imageIndex = 0
  intervalId: any

  changeScreenshoot(maxIndex:any){
    this.intervalId = setInterval(() => {
      this.imageIndex < maxIndex ? this.imageIndex++ : this.imageIndex = 0 ;
    }, 1000)
  }
  refreshScreenshoot() {
    clearInterval(this.intervalId)
    this.imageIndex = 0
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
