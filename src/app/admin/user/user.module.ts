import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserindexComponent } from './userindex/userindex.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UseraddComponent } from './useradd/useradd.component';
import { UserdeleteComponent } from './userdelete/userdelete.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserindexComponent,
    UsereditComponent,
    UseraddComponent,
    UserdeleteComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    FormsModule
  ]
})
export class UserModule { }
