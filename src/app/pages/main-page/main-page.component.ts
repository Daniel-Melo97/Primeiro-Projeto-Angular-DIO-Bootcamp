import { imagesService } from '../../services/images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  dogs!: { link: string, alt: string} [];


  constructor(private imageService: imagesService) { }

  ngOnInit(): void {
    this.dogs = this.imageService.retrieveDogs();
  }

}
