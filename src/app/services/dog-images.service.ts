import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogImagesService {

  dogs = [{link: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*", alt: "dogo"},
          {link: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d", alt: "dogo"},
          {link: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg", alt: "dogo"},
          {link: "https://www.aspca.org/sites/default/files/blog_make-dogs-day_101619_main.jpg", alt: "dogo"},
          {link: "https://scx2.b-cdn.net/gfx/news/hires/2020/dog.jpg", alt: "dogo"},
          {link: "https://www.sciencenewsforstudents.org/wp-content/uploads/2020/07/070720_bo_dogage_feat-1028x579.jpg", alt: "dogo"}]

  constructor() { }

  retrieveAll(){
    return this.dogs;
  }
}
