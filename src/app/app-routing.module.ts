import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpComponent } from './components/http/http.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: 'http', component: HttpComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/:id/:name', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
