import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Brancher au routage principal, app-routing.module.ts
const routes: Routes = [
  {path:'',component:AlayoutComponent,children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'user',loadChildren: ()=> import('./user/user.module').then(m => m.UserModule)},
    {path:'movies',loadChildren: ()=> import('./movies/movies.module').then(m => m.MoviesModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
