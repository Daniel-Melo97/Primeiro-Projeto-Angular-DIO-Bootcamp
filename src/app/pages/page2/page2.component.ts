import { Component, OnInit } from '@angular/core';
import { imagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit{
  
  plants!: { link: string, alt: string} [];


  constructor(private imageService: imagesService) { }

  ngOnInit(): void {
    this.plants = this.imageService.retrievePlants();
  }

}
