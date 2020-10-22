import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Users
import { ListUsersComponent } from './page/list-users/list-users.component';
import { ViewUserComponent } from './page/view-user/view-user.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full', //
  },
  {
    path: 'users',
    component: ListUsersComponent,
  },
  {
    path: 'users/:id',
    component: ViewUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
