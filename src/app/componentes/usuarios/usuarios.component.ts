import { Component } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
declare var $:any

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  constructor(private peticion:PeticionService, private msg:MensajesService){}

  ngOnInit(): void {
  this.listar()
  }

  email:string=""
  nombre:string=""
  apellido:string =""
  telefono:any=""
  direccion:string=""
  rol:string=""
  datos:any=""
  miemail:string=""
 

  nuevo(){
    this.email=""
    this.nombre=""
    this.apellido=""
    this.telefono=""
    this.direccion=""
    this.rol=""
    $('#mdlNuevoRegistro').modal('show')
  }

  listar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/usuarios/listar",
      payload:{
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      this.datos = res.datos
    })
  }


  editartabla(email:string){
    this.miemail=email
    let post = {
      host:this.peticion.urlLocal,
      path:"/usuarios/buscar",
      payload:{
        email:email
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      this.email=res[0].email
      this.nombre=res[0].nombre
      this.apellido=res[0].apellido
      this.telefono=res[0].telefono
      this.direccion=res[0].direccion
      this.rol=res[0].rol
      $('#mdlNuevoRegistro').modal('show')

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
        rol:this.rol.toString()
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      if(res.state==false){
          this.msg.load("danger", res.mensaje)
      }else{
        this.msg.load("success", res.mensaje)
        $('#mdlNuevoRegistro').modal('hide')
        this.listar()
      }
    })

  }

  eliminar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/usuarios/borrar",
      payload:{
        email:this.email
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      if(res.state==false){
          this.msg.load("danger", res.mensaje)
      }else{
        this.msg.load("success", res.mensaje)
        $('#mdlNuevoRegistro').modal('hide')
        this.listar()
      }
    })
  }
}
