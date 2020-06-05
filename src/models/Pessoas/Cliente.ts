import { SEXO, ESTADO_CIVIL, Pessoa, TIPO_PESSOA } from "./Pessoa";

export interface Cliente extends Pessoa {
    limiteCredito?: number,

    sexo?: SEXO,
    estadoCivil?: ESTADO_CIVIL,
    tipo: TIPO_PESSOA
}