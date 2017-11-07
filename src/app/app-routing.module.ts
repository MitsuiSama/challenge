import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './components/users/user-list/user-list.component';

const routes: Routes = [
  { path: 'list' , component: UserListComponent },
   { path: 'detail/:id' , component: UserDetailComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})



export class AppRoutingModule { 

 
  
}
