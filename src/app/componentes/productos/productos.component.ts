import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
declare var $:any

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit{

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
  marca:string=""
  referencia:string=""

  nuevo(){
    this.codigo=""
    this.nombre=""
    this.descripcion=""
    this.miCodigo=""
    this.imagen=""
    this.marca=""
    this.referencia=""
    $('#mdlNuevoRegistro').modal('show')
  }

  guardar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/productos/registrar",
      payload:{
        codigo:this.codigo,
        nombre:this.nombre,
        marca:this.marca,
        referencia:this.referencia,
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
      path:"/productos/listar",
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
      path:"/productos/buscarporcodigo",
      payload:{
        codigo:codigo
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      this.codigo=res[0].codigo
      this.nombre=res[0].nombre
      this.marca=res[0].marca
      this.referencia=res[0].referencia
      this.descripcion=res[0].descripcion
      this.imagen=res[0].imagen
      $('#mdlNuevoRegistro').modal('show')

    })
  }

  actualizar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/productos/actualizar",
      payload:{
        codigo:this.codigo,
        nombre:this.nombre,
        marca:this.marca,
        referencia:this.referencia,
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
      path:"/productos/borrar",
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