import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Aliment} from '../models/aliment';
import {Observable, Subject} from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {
  private baseUrl: 'http://localhost:1337/aliments';

  private alimentCreated = new Subject<string>();
  constructor(private http: HttpClient) { }

  postAliment(aliment: string) {
    return this.http.post<Aliment>(`http://localhost:1337/aliments`, aliment);
  }

  getAliments(): Observable<any> {
    return this.http.get<any>(`http://localhost:1337/aliments`);
  }

  getCategories() {
    return this.http.get<any>(`http://localhost:1337/categories`).pipe(
      tap((data) => {
        console.log(data);
      }),
      map((data) => {
        const categories = data.map(categorie => {
          const obj = { id: categorie.id, name: categorie.name };
          console.log('objCategories aliments', obj);
          return obj;
        });
        return categories;
      })
    );
  }

  dispatchpostCreated(id: string) {
    this.alimentCreated.next(id);
  }
}
