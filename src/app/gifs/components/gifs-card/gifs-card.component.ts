import { Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-Card.component.css'],
})
export class GifsCardComponent implements OnInit { 
  
  @Input()
  public gif!: Gifs;
  constructor() {}

  ngOnInit(): void {
      if(!this.gif) throw new Error('Gif is required')
  }
}
