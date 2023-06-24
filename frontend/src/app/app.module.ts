import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Routes,RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AllPlayersComponent } from './components/all-players/all-players.component'
import { UpdatePlayersComponent } from './components/update-players/update-players.component';
import { NewPlayersComponent } from './components/new-players/new-players.component';
const appRoutes:Routes = [

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllPlayersComponent,
    UpdatePlayersComponent,
    NewPlayersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
   RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
