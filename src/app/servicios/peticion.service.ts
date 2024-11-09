import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(private http:HttpClient) { }

  urlLocal:string ="https://backend-aliat.onrender.com"//"http://localhost:3000"

//   Post(url:string, data:{}){
//     let promise = new Promise((resolve,reject)=>{
//       this.http.post(url,data)
//       .toPromise()
//       .then((res)=>{
//         resolve(res)
//       }).catch((error)=>{
//         reject(error)
//       })
//     })
//     return promise
//   }

//   Get(url:string, data:{}){
//     let promise = new Promise((resolve,reject)=>{
//       this.http.get(url)
//       .toPromise()
//       .then((res)=>{
//         resolve(res)
//       }).catch((error)=>{
//         reject(error)
//       })
//     })
//     return promise
//   }

async Post(url: string, data: {}): Promise<any> {
  try {
    const response = await this.http.post(url, data, { withCredentials: true }).toPromise();
    return response;
  } catch (error) {
    throw error;
  }
}

async Get(url: string): Promise<any> {
  try {
    const response = await this.http.get(url, { withCredentials: true }).toPromise();
    return response;
  } catch (error) {
    throw error;
  }
}


}
