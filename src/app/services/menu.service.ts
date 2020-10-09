import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Aliment} from '../models/aliment';
import {Recette} from '../models/recette';
import {Menu} from '../models/menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuCreated = new Subject<string>();
  constructor(private http: HttpClient) { }

  getMenus() {
    return this.http.get(`http://localhost:1337/menus`);
  }

  addMenu(menu: string) {
    return this.http.post(`http://localhost:1337/menus`, menu);
  }

  addJour(jour: string) {
    return this.http.post(`http://localhost:1337/jours`, jour);
  }

  handleMenuCreated() {
    return this.menuCreated.asObservable();
  }

  dispatchMenuCreated(id: string) {
    this.menuCreated.next(id);
  }

  getJours() {
    return this.http.get(`http://localhost:1337/jours`);
  }

  getRecettes(): Observable<Recette[]> {
    // @ts-ignore
    return this.http.get<Recette[]>(`http://localhost:1337/recettes`);
  }

  updateMenu(id: string, menu: Menu) {
    return this.http.put(`http://localhost:1337/menus/${id}`, menu);
  }

  deleteOneMenu(id: string) {
    return this.http.delete(`http://localhost:1337/menus/${id}`);
  }

  deleteMenus(ids: string[]) {
    const allIds = ids.join(',');
    return this.http.delete(`http://localhost:1337/menus/?ids=${allIds}`);
  }
}
