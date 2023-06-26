import { Medidas } from 'src/app/model/medidas';
export interface FichaCorpos {
    
    id: Number,
    dataCriacao: Number,
    peso: Number,
    altura: Number,
    sexo: String,
    bodyFat: Number,
    imc: Number,
    status: String,
    medidas: Medidas[]
    
}
