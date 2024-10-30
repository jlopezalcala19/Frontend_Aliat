import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-menulateralclientes',
  templateUrl: './menulateralclientes.component.html',
  styleUrls: ['./menulateralclientes.component.css']
})
export class MenulateralclientesComponent {

  constructor(private actrouter: Router, private msg: MensajesService, private peticion:PeticionService){}
  
  ngOnInit(): void {
    this.state()
  }

  nombrecompleto:string="Cargando..."
  rol:string="0"

  state(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/usuarios/state",
      payload:{
      }
    }
    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
     if(res.rol==undefined){
        this.actrouter.navigate(["/login"])
     }
        this.nombrecompleto=res.nombrecompleto
        this.rol=res.rol
    })
  }
  
  logout(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/usuarios/logout",
      payload:{
      }
    }
    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
        this.msg.load("success", res.mensaje)
        this.actrouter.navigate(["/login"])
     
    })
  }

}
