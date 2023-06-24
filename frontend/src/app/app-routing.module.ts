import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { NewPlayersComponent } from './components/new-players/new-players.component';
import { UpdatePlayersComponent } from './components/update-players/update-players.component';

const routes: Routes = [
  {path:'all-players',component:AllPlayersComponent},
  {path:'new-player',component:NewPlayersComponent},
  {path:'edit-player:/id',component:UpdatePlayersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
