import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-headerclientelog',
  templateUrl: './headerclientelog.component.html',
  styleUrls: ['./headerclientelog.component.css']
})
export class HeaderclientelogComponent {

  constructor(private actrouter: Router, private peticion:PeticionService, private msg:MensajesService){}
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
