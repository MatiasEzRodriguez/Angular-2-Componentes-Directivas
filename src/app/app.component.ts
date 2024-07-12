import { Component, OnInit } from '@angular/core';

import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  imgParent = '';
  showImg = true;
  
  onLoaded(img: string) {
    console.log('log padre', img);
  }

  ngOnInit(): void {
    
  }
  toggleImg() {
    this.showImg = !this.showImg
  }

}
