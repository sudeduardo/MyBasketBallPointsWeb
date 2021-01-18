import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPointsComponent } from './my-points/my-points.component';
import { MyResultsComponent } from './my-results/my-results.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path:'', redirectTo:'jogos', pathMatch:'full'},
  { path:'resultados', component: MyResultsComponent },
  { path:'jogos', component: MyPointsComponent },
  { path:'perfil', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
