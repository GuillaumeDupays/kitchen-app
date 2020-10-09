import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Recette} from '../models/recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
baseUrl = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getRecettes(): Observable<Recette[]> {
    // @ts-ignore
    return this.http.get<Recette[]>(`${this.baseUrl}/recettes`);
  }

  getOneRecette(id: number | string) {
    return this.getRecettes().pipe(
      tap( data => {
        console.log('dataOneRecette', data);
      }),
      // (+) before `id` turns the string into a number
       map((data) =>  data.find(recette => recette.id === +id)));
/*      map((data) => {
        const recettes = data.map(recette => {
          const obj = {
            id: recette.id,
            nomProduit: recette.aliments.map(x => x.nomProduit.length),
          };
          console.log('objReck', obj);
          return obj;
        });
        return recettes;
      })
  );*/
  }

  getCategories() {
    return this.http.get<any>(`http://localhost:1337/recette-categories`).pipe(
      tap((data) => {
        console.log(data);
      }),
      map((data) => {
        const categories = data.map(categorie => {
          const obj = { id: categorie.id, name: categorie.name };
          console.log('objCatRecette', obj);
          return obj;
        });
        return categories;
      })
    );
  }

  addRecette(recette: any) {
    return this.http.post(`http://localhost:1337/recettes`, recette);
  }

  uploadImage(formData: FormData): Observable<any> {
    return this.http.post(`http://localhost:1337/uploads`, formData).pipe(tap(() => console.log(formData)));
  }
}
