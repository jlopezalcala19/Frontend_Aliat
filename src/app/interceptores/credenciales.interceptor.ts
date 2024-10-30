import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CredencialesInterceptor implements HttpInterceptor {

  constructor() {}

  requestOptions:any ={}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request.method)

    this.requestOptions={
      Headers:new HttpHeaders({
        //Cabeceras
      }),
      withCredentials:true
    }

    const reqclone=request.clone(this.requestOptions)
    return next.handle(reqclone)
  }
}
