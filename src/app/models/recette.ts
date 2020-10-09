import {Aliment} from './aliment';
import {Etape} from './etape';
import {RecetteCategorie} from './recetteCategorie';

export interface Recette {
  id?: number;
  nomRecette: string;
  aliments: Aliment;
  recette_categorie: RecetteCategorie;
  img: string;
  etapes: Etape;
}
