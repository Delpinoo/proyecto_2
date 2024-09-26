import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorias } from '../interface/comidas';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpclienet:HttpClient) { }

  getCategorias(){
    return this.httpclienet.get<Categorias>(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  }
}
