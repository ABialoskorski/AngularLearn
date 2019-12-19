import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpComponent } from './components/http/http.component';

const routes: Routes = [
  { path: 'http', component: HttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
