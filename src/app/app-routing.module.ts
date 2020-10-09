import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AlimentsListComponent} from './aliment/aliments-list/aliments-list.component';

import {AlimentAddComponent} from './aliment/aliment-add/aliment-add.component';
import {ListRecetteComponent} from './recette/list-recette/list-recette.component';
import {DetailsPreparationComponent} from './recette/details-preparation/details-preparation.component';
import {AddRecetteComponent} from './recette/add-recette/add-recette.component';
import {MenuComponent} from './menu/menu.component';
import {AddMenuComponent} from './menu/add-menu/add-menu.component';
import {MenuListComponent} from './menu/menu-list/menu-list.component';

const route: Routes = [
  { path: '', component: ListRecetteComponent },
  { path: 'aliments', component: AlimentsListComponent},
  { path: 'add-aliment', component: AlimentAddComponent },
  { path: 'add-recette', component: AddRecetteComponent},
  { path: 'recettes', component: ListRecetteComponent},
  { path: 'recettes/:id', component: DetailsPreparationComponent},
  { path: 'menus', component: MenuListComponent },
  { path: 'add-menus', component: AddMenuComponent },
  // { path: 'test-load', component: MenuComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
