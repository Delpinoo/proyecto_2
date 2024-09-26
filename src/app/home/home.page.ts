import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Categoria, Categorias } from '../interface/comidas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listaCategorias:Categoria[]=[];

  constructor(private dataserviceService:DataserviceService) {}

  ngOnInit(){
    console.log("On Init")
    this.dataserviceService.getCategorias().subscribe(datos=> {
      console.log(datos)
      this.listaCategorias.push(...datos.categories);
    })
  }

}
