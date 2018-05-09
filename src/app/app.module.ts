import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { HttpModule } from '@angular/http'; 
import { Routes, RouterModule } from '@angular/router';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { EndDirective } from './end.directive';
import {InfyscrollService} from './infyscroll.service';
import { LoaderComponent } from './loader/loader.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FetchService} from './fetch.service';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'article/:id',
    component: ArticlesComponent
 }
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    HomeComponent,
    EndDirective,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    
  ],
  providers: [InfyscrollService, FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
