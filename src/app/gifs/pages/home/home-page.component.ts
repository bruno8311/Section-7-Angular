import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private gifService: GifsService){
    
  }

  get gifsList(): Gifs[] {
    console.log("LOS GIFS: ",[...this.gifService.gifsSearchList] )
    return [...this.gifService.gifsSearchList]
  }


}
