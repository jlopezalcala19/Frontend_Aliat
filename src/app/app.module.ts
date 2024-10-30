import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { MisionComponent } from './componentes/mision/mision.component';
import { VisionComponent } from './componentes/vision/vision.component';
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { MenulateralComponent } from './componentes/menulateral/menulateral.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { MenusuperiorComponent } from './componentes/menusuperior/menusuperior.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component'
import { CredencialesInterceptor } from './interceptores/credenciales.interceptor';
import { DashboardclientesComponent } from './componentes/dashboardclientes/dashboardclientes.component';
import { MenulateralclientesComponent } from './componentes/menulateralclientes/menulateralclientes.component';
import { PerfilclienteComponent } from './componentes/perfilcliente/perfilcliente.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { MiperfilComponent } from './componentes/miperfil/miperfil.component';
import { HomeclientelogComponent } from './componentes/homeclientelog/homeclientelog.component';
import { HeaderclientelogComponent } from './componentes/headerclientelog/headerclientelog.component';
import { MisionclientelogComponent } from './componentes/misionclientelog/misionclientelog.component';
import { VisionclientelogComponent } from './componentes/visionclientelog/visionclientelog.component';
import { ContactenosclientelogComponent } from './componentes/contactenosclientelog/contactenosclientelog.component';
import { QuienesSomosclientelogComponent } from './componentes/quienes-somosclientelog/quienes-somosclientelog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactenosComponent,
    MisionComponent,
    VisionComponent,
    QuienesSomosComponent,
    HeaderComponent,
    FooterComponent,
    MensajesComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    MenulateralComponent,
    ProductosComponent,
    MenusuperiorComponent,
    UsuariosComponent,
    CategoriasComponent,
    DashboardclientesComponent,
    MenulateralclientesComponent,
    PerfilclienteComponent,
    CarouselComponent,
    MiperfilComponent,
    HomeclientelogComponent,
    HeaderclientelogComponent,
    MisionclientelogComponent,
    VisionclientelogComponent,
    ContactenosclientelogComponent,
    QuienesSomosclientelogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CredencialesInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
