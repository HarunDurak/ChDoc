import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Full_ROUTES } from './full-pages/full-pages-routes';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { LoginComponent } from './login/login.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  {path:"",component:FullLayoutComponent,children:Full_ROUTES},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
