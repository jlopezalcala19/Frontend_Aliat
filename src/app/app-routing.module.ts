import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { MisionComponent } from './componentes/mision/mision.component';
import { VisionComponent } from './componentes/vision/vision.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { DashboardclientesComponent } from './componentes/dashboardclientes/dashboardclientes.component';
import { PerfilclienteComponent } from './componentes/perfilcliente/perfilcliente.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { MiperfilComponent } from './componentes/miperfil/miperfil.component';
import { HomeclientelogComponent } from './componentes/homeclientelog/homeclientelog.component';
import { HeaderclientelogComponent } from './componentes/headerclientelog/headerclientelog.component';
import { MisionclientelogComponent } from './componentes/misionclientelog/misionclientelog.component';
import { VisionclientelogComponent } from './componentes/visionclientelog/visionclientelog.component';
import { ContactenosclientelogComponent } from './componentes/contactenosclientelog/contactenosclientelog.component';
import { QuienesSomosclientelogComponent } from './componentes/quienes-somosclientelog/quienes-somosclientelog.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'contactenos', component:ContactenosComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'registro', component:RegistroComponent, pathMatch:'full'},
  {path:'mision', component:MisionComponent, pathMatch:'full'},
  {path:'vision', component:VisionComponent, pathMatch:'full'},
  {path:'quienes-somos', component:QuienesSomosComponent, pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent, pathMatch:'full'},
  {path:'productos', component:ProductosComponent, pathMatch:'full'},
  {path:'usuarios', component:UsuariosComponent, pathMatch:'full'},
  {path:'categorias', component:CategoriasComponent, pathMatch:'full'},
  {path:'dashboardclientes', component:DashboardclientesComponent, pathMatch:'full'},
  {path:'perfilcliente', component:PerfilclienteComponent, pathMatch:'full'},
  {path:'carousel', component:CarouselComponent, pathMatch:'full'},
  {path:'miperfil', component:MiperfilComponent, pathMatch:'full'},
  {path:'homeclientelog', component:HomeclientelogComponent, pathMatch:'full'},
  {path:'headerclientelog', component:HeaderclientelogComponent, pathMatch:'full'},
  {path:'misionclientelog', component:MisionclientelogComponent, pathMatch:'full'},
  {path:'visionclientelog', component:VisionclientelogComponent, pathMatch:'full'},
  {path:'contactenosclientelog', component:ContactenosclientelogComponent, pathMatch:'full'},
  {path:'quienes-somosclientelog', component:QuienesSomosclientelogComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
