import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
declare var $:any

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {
  constructor(private peticion:PeticionService, private msg:MensajesService, private http: HttpClient){}

  ngOnInit(): void {
  this.listar()

  }

  codigo:string=""
  titulo:string=""
  micodigo:string=""
  mi_id:string=""
  descripcion:string =""
  datos:any=""
  imagen:string=""


  nuevo(){
    this.codigo=""
    this.titulo=""
    this.micodigo=""
    this.mi_id=""
    this.descripcion=""
    this.imagen=""
    $('#mdlNuevoRegistro').modal('show')
  }

  guardar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/carousel/registrar",
      payload:{
        codigo:this.codigo,
        titulo:this.titulo,
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
      path:"/carousel/listar",
      payload:{
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      this.datos = res.datos
      console.log(this.datos)
    })
  }


  editartabla(codigo:string){
    this.micodigo=codigo
    let post = {
      host:this.peticion.urlLocal,
      path:"/carousel/buscarporcodigo",
      payload:{
        codigo:codigo
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      console.log(res)
      this.codigo=res[0].codigo
      this.titulo=res[0].titulo
      this.descripcion=res[0].descripcion
      this.imagen=res[0].imagen
      $('#mdlNuevoRegistro').modal('show')

    })
  }

  actualizar(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/carousel/actualizar",
      payload:{
        codigo:this.codigo,
        titulo:this.titulo,
        descripcion:this.descripcion,
        imagen: this.imagen
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
      path:"/carousel/borrar",
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
