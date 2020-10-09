import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlimentService} from '../../services/aliment.service';
import {Observable} from 'rxjs';
import {Aliment} from '../../models/aliment';

@Component({
  selector: 'app-aliments-list',
  templateUrl: './aliments-list.component.html',
  styleUrls: ['./aliments-list.component.scss']
})
export class AlimentsListComponent implements OnInit, OnDestroy {
  allAliments;
  aliments;
  categories;
  alimentsSub;
  categoriesSub;

  constructor(private alimentService: AlimentService) { }

  ngOnInit(): void {
    this.alimentsSub = this.alimentService.getAliments().subscribe((data) => {
      console.log(data);
      this.aliments = data;
      this.allAliments = data;
    });
    this.categoriesSub = this.alimentService.getCategories().subscribe((data) => {
      console.log('categories', data);
      this.categories = [{ id: 0, name: 'tout'}, ...data];
    });
  }

  filterAliments(e) {
    console.log(e);
    if (e.value === 0) {
      this.aliments = this.allAliments;
      return;
    }
    this.aliments = this.allAliments.filter( c => c.categorie.id === e.value);
  }

  ngOnDestroy(): void {
    this.alimentsSub.unsubscribe();
    this.categoriesSub.unsubscribe();
  }
}
