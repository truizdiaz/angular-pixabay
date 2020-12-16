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
  suscription: Subscription

  constructor(private _imagenService: ImagenService) { 
    this.suscription = this._imagenService.getTerminoBusqueda().subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
