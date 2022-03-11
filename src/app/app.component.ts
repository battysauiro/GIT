import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {Router} from "@angular/router";
import {MatAccordion} from '@angular/material/expansion';
import { TipoContribucionService } from './servicio/tipo-contribucion.service';
import { TipoContribucion } from './modelo/tipo-contribucion';
import { ContribucionService } from './servicio/contribucion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
 
    width;
    height;
    mode:string = 'side';
    open = 'true';
    title = 'Responsive Sidenav Starter';
    @ViewChild(MatAccordion) accordion: MatAccordion;
    name = 'Angular';
    selected?: string = undefined;
    navList: NavList[];
    tipoContribuciones:TipoContribucion[];
    contribucionesPT:String[];
    constructor(public ngZone:NgZone,
                public route: Router,private tipoContribucionServicio:TipoContribucionService,
                private contribucionServicio:ContribucionService)
    {
        this.navList = [
            { nombre: 'Tipo 1', dropDown:false,
            subCategoria:
                    [
                        { subCategoriaNombre: 'Item 1', visable: true },
                        { subCategoriaNombre: 'Item 2', visable: true },
                        { subCategoriaNombre: 'Item 3', visable: true },
                    ]
            },
            { nombre: 'Tab 2', dropDown:false,
            subCategoria:
                    [
                        { subCategoriaNombre: 'Item 1', visable: true },
                        { subCategoriaNombre: 'Item 2', visable: true },
                        { subCategoriaNombre: 'Item 3', visable: true },
                    ]
            },
            { nombre: 'Tab 3', dropDown:false,
            subCategoria:
                    [
                        { subCategoriaNombre: 'Item 1', visable: true },
                        { subCategoriaNombre: 'Item 2', visable: true },
                    ]
            },
        ];
        this.changeMode();
        window.onresize = (e) => {
            ngZone.run(() => {
                this.changeMode();
            });
        };
    }
    onSelected(item: string) {
      this.selected = item;
      this.name = item;
    }

    ngOnInit() {
        this.obtenerTiposContribucion();
        this.RellenarArreglo();
    }

    private obtenerTiposContribucion(){
        this.tipoContribucionServicio.obtenerListaTipoContribucion().subscribe(dato=> {
            this.tipoContribuciones =dato;
        }); 
        console.log(this.tipoContribuciones);
    }

    private obtenerContribucionPorTipo(id:String){
        this.contribucionServicio.obtenerContribucionPorTipo(id).subscribe(dato=>{
            this.contribucionesPT=dato;
            
        });
    }

    private  RellenarArreglo(){
        this.tipoContribucionServicio.obtenerListaTipoContribucion().subscribe(dato=> {
            
        }); 
        
    }
    changeMode() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      if(this.width <= 800) {
          this.mode = 'over';
          this.open = 'false';
      }
      if(this.width > 800) {
          this.mode = 'side';
          this.open = 'true';
      }
  }

}

export class NavList {
    nombre: string;
    dropDown: boolean;
    subCategoria: NavListItem[];
    constructor(_categoryName:string,_dropDown:boolean,_subCategory:NavListItem[]) {
        this.nombre = _categoryName;
        this.dropDown = _dropDown;
        this.subCategoria = _subCategory;
    }
}

export class NavListItem {
    subCategoriaNombre: string;
    visable: boolean;
}
