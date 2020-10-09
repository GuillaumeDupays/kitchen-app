import {Categorie} from './categorie';
import { Recette } from './recette';

export interface Aliment {
  nomProduit: string;
  poids: number;
  categorie: Categorie;
  recette?: Recette;
  uniteMesure: string;
}
