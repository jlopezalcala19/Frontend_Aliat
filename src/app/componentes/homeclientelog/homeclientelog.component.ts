import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-homeclientelog',
  templateUrl: './homeclientelog.component.html',
  styleUrls: ['./homeclientelog.component.css']
})
export class HomeclientelogComponent implements OnInit{
  
  ngOnInit(): void {
    this.listar()
    this.listarcarousel()
  }


  datos:any[]=[]
  datosc:any[]=[]

  constructor(private peticion:PeticionService){}

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

  listarcarousel(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/carousel/listar",
      payload:{
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      this.datosc = res.datos
      console.log(this.datos)
    })
  }
}
