import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AddMenuComponent} from "./add-menu/add-menu.component";
import {ListReservationComponent} from "./list-reservation/list-reservation.component";
import {MenuDetailComponent} from "./menu-detail/menu-detail.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'reservation', component: ListReservationComponent},
  { path: 'add', component: AddMenuComponent},
  { path: 'details/:id', component: MenuDetailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
