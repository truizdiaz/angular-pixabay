import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {
  termino = '';
  suscription: Subscription;
  listImagenes: any[] = [];

  constructor(private _imagenService: ImagenService) { 
    this.suscription = this._imagenService.getTerminoBusqueda().subscribe(data => {
      this.termino = data;
      this.obtenerImagenes();
    })
  }

  ngOnInit(): void {
  }

  obtenerImagenes() {
    this._imagenService.getImagenes(this.termino).subscribe(data => {
      console.log(data);

      if(data.hits.length === 0){
        this._imagenService.setError('Opss.. no encontramos ningun resultado');
        return;
      }

      this.listImagenes = data.hits;
    }, error => {
      this._imagenService.setError('Opss.. ocurrio un error');
    })
  }

}
