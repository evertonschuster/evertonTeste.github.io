import { AxiosResponse } from 'axios';
import api from './Api.configure';
import { IBaseEntity } from '../models/BaseEntity';

export class ApiBase<T extends IBaseEntity<any>> {

    EndPoint: string;

    constructor(endPoint: string) {
        console.log("OIIIIII", endPoint)
        this.EndPoint = endPoint;
    }


    Save(t: T): Promise<AxiosResponse<any>> {
        return api.post(this.EndPoint, t);
    }

    Update(t: T): Promise<AxiosResponse<any>> {
        return api.put(`${this.EndPoint}/${t.id}`, t);
    }

    GetById(id: number): Promise<AxiosResponse<T>> {
        return api.get(`${this.EndPoint}/${id.toString()}`);
    }

    Excluir(id: number): Promise<AxiosResponse<any>> {
        return api.delete(`${this.EndPoint}/${id.toString()}`);
    }
}

