import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroserviceService } from './services/heroservice/heroservice.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageserviceService } from './services/messageservice/messageservice.service';
import { AppRoutingModule } from './routing-config/app-routing/app-routing.module';
import { DahboardComponent } from './components/dahboard/dahboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DahboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroserviceService,MessageserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
