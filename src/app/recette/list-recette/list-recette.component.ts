import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlimentService} from '../../services/aliment.service';
import {RecetteService} from '../../services/recette.service';

@Component({
  selector: 'app-list-recette',
  templateUrl: './list-recette.component.html',
  styleUrls: ['./list-recette.component.scss']
})
export class ListRecetteComponent implements OnInit, OnDestroy {
  allRecettes;
  recettes;
  categories;
  recettesSub;
  categoriesSub;

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.recettesSub = this.recetteService.getRecettes().subscribe((data) => {
      console.log(data);
      this.recettes = data;
      this.allRecettes = data;
    });
    this.categoriesSub = this.recetteService.getCategories().subscribe((data) => {
      console.log('recette_categories', data);
      this.categories = [{ id: 0, name: 'tout'}, ...data];
    });
  }

  filterRecettes(e) {
    console.log(e);
    if (e.value === 0) {
      this.recettes = this.allRecettes;
      return;
    }
    this.recettes = this.allRecettes.filter( c => c.recette_categorie.id === e.value);
  }

  ngOnDestroy(): void {
    this.recettesSub.unsubscribe();
    this.categoriesSub.unsubscribe();
  }
}
