import { DogImagesService } from './../../services/dog-images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  dogs!: { link: string, alt: string} [];


  constructor(private dogService: DogImagesService) { }

  ngOnInit(): void {
    this.dogs = this.dogService.retrieveAll();
  }

}
