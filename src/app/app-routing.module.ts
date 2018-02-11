import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';

const routes: Routes = [
  { path: 'list' , component: UserListComponent },
  { path: 'detail/:id' , component: UserDetailComponent },
  { path: 'edit/:id' , component: UserEditComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})



export class AppRoutingModule {}
