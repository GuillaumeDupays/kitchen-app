import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective} from '@angular/forms';
import {AlimentService} from '../../services/aliment.service';
import get = Reflect.get;
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-aliment-add',
  templateUrl: './aliment-add.component.html',
  styleUrls: ['./aliment-add.component.scss']
})
export class AlimentAddComponent implements OnInit {
  form: FormGroup;
  categorieList: string[] = ['Dessert', 'Entrées', 'Plats'];
  categorie;
  constructor(private alimentService: AlimentService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      nomProduit: '',
      poids: '',
      categorie: '',
      uniteMesure: ''
    });
  }

  addAliment() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.alimentService
        .postAliment(this.form.value)
        .subscribe((data) => console.log('dataA', data));
    }
  }

  handleSuccess(data, formDirective) {
    console.log('ok crée', data);
    this.form.reset();
    formDirective.resetForm();
  }

  handleError(error) {
    console.log('KO handleError - aliment NOT created', error);
  }
}
