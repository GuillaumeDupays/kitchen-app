import {Component, Input, OnInit} from '@angular/core';
import {RecetteService} from '../../services/recette.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Recette} from '../../models/recette';
import {environment} from '../../../environments/environment';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-details-preparation',
  templateUrl: './details-preparation.component.html',
  styleUrls: ['./details-preparation.component.scss']
})
export class DetailsPreparationComponent implements OnInit {
  preparation$: Observable<any>;
  aliments;
  endpoint = `${environment.localEndPoint}`;
  constructor( private recetteService: RecetteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
   /* this.preparation$ = this.recetteService.getRecettes()
      .subscribe(data => {
        console.log('preparation$', data);
        // @ts-ignore
        this.preparation$ = [{id: 0}, ...data];
      });*/

  /*.pipe(
      tap( data => {
        console.log(data);
      }),
      map( (data) => {
        const recettes = data.map((recette) => {
          const obj = {
            aliments: recette.aliments.map(x => x.nomProduit),
          };
          console.log('obj', obj);
          return obj;
        });
        return recettes;
      })
    );*/
// @ts-ignore
    this.preparation$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.recetteService.getOneRecette(params.get('id')))
    );
  }
}

