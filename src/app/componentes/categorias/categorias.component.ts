import { Component } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
declare var $:any

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  constructor(private peticion:PeticionService, private msg:MensajesService){}

  ngOnInit(): void {
  this.listar()
  }

  codigo:string=""
  nombre:string=""
  descripcion:string =""
  datos:any=""
  miCodigo:string=""
  imagen:string=""


  nuevo(){
    this.codigo=""
    this.nombre=""
    this.descripcion=""
    this.miCodigo=""
    this.imagen=""
    $('#mdlNuevoRegistro').modal('show')
  }

  guardar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/categorias/registrar",
      payload:{
        codigo:this.codigo,
        nombre:this.nombre,
        descripcion:this.descripcion
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


  listar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/categorias/listar",
      payload:{
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      this.datos = res.datos
    })
  }


  editartabla(codigo:string){
    this.miCodigo=codigo
    let post = {
      host:this.peticion.urlLocal,
      path:"/categorias/buscarporcodigo",
      payload:{
        codigo:codigo
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      this.codigo=res[0].codigo
      this.nombre=res[0].nombre
      this.descripcion=res[0].descripcion
      this.imagen=res[0].imagen
      $('#mdlNuevoRegistro').modal('show')

    })
  }

  actualizar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/categorias/actualizar",
      payload:{
        codigo:this.codigo,
        nombre:this.nombre,
        descripcion:this.descripcion,
        imagen:this.imagen
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
      path:"/categorias/borrar",
      payload:{
        codigo:this.codigo
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
