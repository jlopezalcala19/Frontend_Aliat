import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})

export class MenulateralComponent implements OnInit{
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
        console.log("El rol es: "+ res.rol)
        console.log(res)
     }
     
      this.nombrecompleto=res.nombrecompleto
     this.rol=res.rol
     console.log(res.rol)
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
