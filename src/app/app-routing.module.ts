import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TokenComponent } from './token/token.component';

const routes: Routes = [
  { path: 'token/:id', component: TokenComponent },  
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
