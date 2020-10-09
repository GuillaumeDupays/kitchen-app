import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecetteService} from '../../services/recette.service';
import {Observable} from 'rxjs';
import {Recette} from '../../models/recette';
import {FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-details-recette',
  templateUrl: './details-recette.component.html',
  styleUrls: ['./details-recette.component.scss']
})
export class DetailsRecetteComponent implements OnInit {
  @Input() recette;
  recettes;
  endpoint = `${environment.localEndPoint}`;
  constructor( private route: ActivatedRoute, private recetteService: RecetteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.getRecettes(id);
  }

  getRecettes(): void {
    this.recetteService.getRecettes()
      .subscribe(data => {
        console.log('recettes', data);
        this.recettes = [{id: 0}, ...data];
      });
  }

}
