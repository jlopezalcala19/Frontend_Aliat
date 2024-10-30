import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  datos:any[]=[
  ]

  eliminar(){
    setTimeout(()=>{
      this.datos.splice(0,1)
    }, 2000);
  }
  
  load(tipo:string, mensaje:string){
  this.datos.push({tipo:tipo, mensaje:mensaje}, )
  this.eliminar()
  }
}
