import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import get = Reflect.get;

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  // jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  menus;
  allMenus;
  recettes;

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus().subscribe((data) => {
      console.log(data, 'dataMenus');
      this.menus = data;
      this.allMenus = data;
    });
  }
}
