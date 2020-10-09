import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MenuService} from '../../services/menu.service';
import {Menu} from '../../models/menu';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent implements OnInit {
  jours;
  formMenu: FormGroup;
  menusSub;
  menus$: Observable<Menu[]>;
  allMenus;
  recettes;
  waitStp = false;

  constructor(private menuService: MenuService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.menuService
      .getMenus()
      .subscribe(data => this.refresh(data));
    this.menuService.handleMenuCreated().subscribe(data => {
      console.log('Réception', data);
      this.refresh(data);
    });
    this.initForm();
    this.menuService.getJours().subscribe((data) => {
      console.log('jours', data);
      // @ts-ignore
      this.jours = [{id: 0, nomJour: 'Tout'}, ...data];
    });
    this.menuService.getRecettes().subscribe((data) => {
      console.log('recettes', data);
      this.recettes = [{id: 0, nomRecette: 'Tout'}, ...data];
    });
  }

  initForm() {
    this.formMenu = this.fb.group({
      midi: '',
      soir: '',
      day: '',
    });
  }

  addMenu() {
    if (this.formMenu.valid) {
      this.waitStp = true;
      console.log(this.formMenu.value);
      this.menuService
        .addMenu(this.formMenu.value)
        .subscribe((data) => this.handleSuccess(data));
    }
  }

  handleSuccess(data) {
    console.log('Menu ajouté', data);
    this.formMenu.reset();
    this.menuService.dispatchMenuCreated(data.id);
  }



  refresh(data) {
    console.log('data', data);
    // tslint:disable-next-line:no-shadowed-variable
    this.menuService.getMenus().subscribe(data => {
      this.allMenus = data;
    });
  }

  updateMenu(menu) {
    console.log(menu, 'menu');
  }

  deleteMenus(selectedOptions) {
    const ids = selectedOptions.map(so => so.value);
    if (ids.length === 1) {
      this.menuService
        .deleteOneMenu(ids[0])
        .subscribe(data => this.refresh(data));
    } else {
      return this.menuService.deleteMenus(ids).subscribe(data => console.log(data), err => console.log(err));
    }
  }
}
