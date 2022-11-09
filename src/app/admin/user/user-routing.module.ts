import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseraddComponent } from './useradd/useradd.component';
import { UserdeleteComponent } from './userdelete/userdelete.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserindexComponent } from './userindex/userindex.component';

const routes: Routes = [
  {path:'',component:UserindexComponent},
  {path:'edit/:userId',component:UsereditComponent},
  {path:'add',component:UseraddComponent},
  {path:'delete/:userId',component:UserdeleteComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
