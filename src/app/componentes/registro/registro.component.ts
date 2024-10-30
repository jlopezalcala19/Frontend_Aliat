import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private actrouter: Router, private msg: MensajesService, private peticion:PeticionService){}
    
  
  
  email:string=""
  nombre:string=""
  apellido:string=""
  direccion:string=""
  telefono:number=0
  password:string=""

  nuevo(){
    this.email=""
    this.nombre=""
    this.apellido=""
    this.direccion=""
    this.telefono=0
    this.password=""
  }


  tologin(){
    this.actrouter.navigate(["/login"])
  }

  registrar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/usuarios/registrar",
      payload:{
        email:this.email,
        nombre:this.nombre,
        apellido:this.apellido,
        direccion:this.direccion,
        telefono:this.telefono,
        password:this.password
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      if(res.state==false){
          this.msg.load("danger", res.mensaje)
      }else{
        this.msg.load("success", res.mensaje)
        this.actrouter.navigate(["/login"])
      }
    })
  }

}
