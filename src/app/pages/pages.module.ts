import { Page2Component } from './page2/page2.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from './../shared/footer/footer.module';
import { MaterialModule } from './../material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { imagesService } from '../services/images.service';


const routes: Routes =[{path:'main', component:MainPageComponent},
                      {path:'plants', component:Page2Component}];


@NgModule({
  declarations: [
    MainPageComponent,
    Page2Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  providers: [imagesService]
})
export class PagesModule { }
