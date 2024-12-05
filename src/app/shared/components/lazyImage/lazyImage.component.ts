import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',
  styleUrls: ['./lazyImage.component.css'],
})
export class LazyImageComponent implements OnInit {

  @Input() public url!: string;
  @Input() public alt!: string;
  public hasLoader: boolean = false;

  
  ngOnInit(): void {
    if(!this.url) throw new Error('Method not implemented');
   }

   onLoader() {
    this.hasLoader = true;
   }


}
