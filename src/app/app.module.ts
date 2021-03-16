import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { Page2Component } from './pages/page2/page2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [{path:'', redirectTo: '/main', pathMatch: 'full' },
                        {path:'main', component: MainPageComponent },
                        {path:'**', redirectTo: '/notFound'}];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
