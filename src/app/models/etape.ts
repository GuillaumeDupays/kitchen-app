import {Recette} from './recette';

export interface Etape {
  description: string;
  numEtape: number;
  recette: Recette;
}
