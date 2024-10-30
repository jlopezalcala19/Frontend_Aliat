import { Component } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent {

constructor(private peticion:PeticionService, private msg:MensajesService){}

  ngOnInit(): void {
    this.cargar()
  }

  email:string=""
  nombre:string=""
  apellido:string =""
  telefono:any=""
  direccion:string=""
  datos:any=""
  miemail:string=""
  password:string=""
  nuevopassword:string=""
 

  cargar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/usuarios/state",
      payload:{
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      //console.log(res)
      this.email=res.email
      this.nombre=res.nombre
      this.apellido=res.apellido
      this.telefono=res.telefono
      this.direccion=res.direccion
      this.password=res.password
    })
  }

  actualizar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/usuarios/actualizar",
      payload:{
        email:this.email,
        nombre:this.nombre,
        apellido:this.apellido,
        telefono:this.telefono,
        direccion:this.direccion,
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      if(res.state==false){
          this.msg.load("danger", res.mensaje)
      }else{
        this.msg.load("success", res.mensaje)
      }
    })

  }

  actualizarpassword(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/usuarios/actualizarpassword",
      payload:{
        email:this.email,
        password:this.password,
        nuevopassword:this.nuevopassword
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      if(res.state==false){
          this.msg.load("danger", res.mensaje)
      }else{
        this.msg.load("success", res.mensaje)
      }
    })

  }



}