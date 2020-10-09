import { Component, OnInit } from '@angular/core';
import {RecetteService} from '../../services/recette.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Recette} from '../../models/recette';
import {AlimentService} from '../../services/aliment.service';
import {Aliment} from '../../models/aliment';

@Component({
  selector: 'app-add-recette',
  templateUrl: './add-recette.component.html',
  styleUrls: ['./add-recette.component.scss']
})
export class AddRecetteComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private recetteService: RecetteService, private alimentService: AlimentService) {}

  ngOnInit(): void {
  this.form = this.fb.group({
    nomRecette: ['', Validators.required],
    aliments: this.fb.group({
      nomProduit: '',
    }),
    recette_categorie: this.fb.group({
      name: '',
    }),
    img: '',
    etapes: ''
  });
  }

  addRecette() {
    if (this.form.valid) {
      const recette: Recette = this.form.value;
      console.log('recette', recette);
      this.recetteService.addRecette(recette).subscribe(
        (data) => console.log('data', data),
        (err) => console.log(err)
      );
    }
  }

}
