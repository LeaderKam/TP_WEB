import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DoodleComponent } from './doodle/doodle.component';
import { AddUserComponent } from './doodle/add-user/add-user.component';


const routes: Routes = [
{path: 'home/pokemon', component: PokemonComponent},
{path: 'home/doodle', children: [
  {path: '', component: DoodleComponent},
  {path: 'add', component: AddUserComponent}
  ]
},
{path: '**', component: PokemonComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
