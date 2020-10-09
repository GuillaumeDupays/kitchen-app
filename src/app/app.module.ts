import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AlimentsListComponent } from './aliment/aliments-list/aliments-list.component';
import { NavComponent } from './nav/nav.component';

import { AlimentAddComponent } from './aliment/aliment-add/aliment-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AlimentDetailsComponent } from './aliment/aliment-details/aliment-details.component';

import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListRecetteComponent } from './recette/list-recette/list-recette.component';
import { DetailsRecetteComponent } from './recette/details-recette/details-recette.component';
import { DetailsPreparationComponent } from './recette/details-preparation/details-preparation.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { AddRecetteComponent } from './recette/add-recette/add-recette.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MenuComponent } from './menu/menu.component';
import { AddMenuComponent } from './menu/add-menu/add-menu.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuDetailsComponent } from './menu/menu-details/menu-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    AlimentsListComponent,
    NavComponent,
    AlimentAddComponent,
    AlimentDetailsComponent,
    ListRecetteComponent,
    DetailsRecetteComponent,
    DetailsPreparationComponent,
    AddRecetteComponent,
    MenuComponent,
    AddMenuComponent,
    MenuListComponent,
    MenuDetailsComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatListModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
