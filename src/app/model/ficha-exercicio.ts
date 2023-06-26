import { listasDeExercicios } from "./listas-de-exercicio";

export interface FichaExercicio {

    id: Number,
    objetivo: String,
    metaPeso: Number,
    metaBodyFat: Number,
    listasDeExercicios: listasDeExercicios[]

}
