import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";

const BASE_URL: string = 'http://localhost:8080/tree'

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private readonly http: HttpClient) { }

  public getAllTreeTypes(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/types`);
  }


  getTreeOfType(type: string): Promise<number[]> {
    const url = `${BASE_URL}/` + type;
    const res = this.http.get<number[]>(url);
    return firstValueFrom(res);
  }

  public getTreeById(type: string, id: number) : Promise<ITree>{
    const url = `${BASE_URL}/` + type + "/" + id;
    const res = this.http.get<ITree>(url);
    return firstValueFrom(res);
  }

  public buyTree(type: string, id: number): any{
    const url = `${BASE_URL}/` + type + "/" + id + "/buy";
    return this.http.post(url,null);
  }


}

export enum TreeType {
  Blaufichte= "Blaufichte",
  Nordmanntanne = "Nordmanntanne"
}

export interface ITree {
  id: number,
  type: TreeType,
  heightMeters: number,
  price: number,
  sold: boolean
}
