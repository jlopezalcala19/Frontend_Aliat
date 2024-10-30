import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private actrouter: Router, private msg: MensajesService, private peticion:PeticionService){}
  
  toregistro(){
    this.actrouter.navigate(["/registro"])
  }

  email:string=""
  password:string=""

  login(){
    let post = {
      host:this.peticion.urlLocal,
      path:"/usuarios/login",
      payload:{
        email:this.email,
        password:this.password
      }
    }

    this.peticion.Post(post.host+post.path, post.payload).then((res:any)=>{
      //console.log(res)

      if(res.state==false){
        this.msg.load("danger", res.mensaje)
      }else{
        if(res.datos[0].rol=="1"){
          this.msg.load("success", res.mensaje)
          this.actrouter.navigate(["/dashboardclientes"])
        }else{
          this.msg.load("success", res.mensaje)
          //console.log(res.datos)
          this.actrouter.navigate(["/dashboard"])
        }
      }
     
    })
  }
}
