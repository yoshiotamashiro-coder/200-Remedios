export interface Recipe {
  id: string;
  category: string;
  isQuick: boolean;
  title: string;
  description: string;
  idealPara: string;
  tipo: string;
  cuandoUsarlo: string;
  precauciones: string;
  ingredientes: string[];
  instrucciones: string[];
  dosis: string;
  almacenamiento: string;
  efecto: string;
}
