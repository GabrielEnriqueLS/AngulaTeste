import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  postNomeProduto(data : any){
    return this.http.post<any>("http://localhost:3000/posts", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getNomeProduto(){
    return this.http.get<string>("http://localhost:3000/posts")
    .pipe(map((res:String)=>{
      return res;
    }))
  }

  updateNomeProduto(data : any,id : any){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteNomeProduto(id : number){
    return this.http.delete<number>("http://localhost:3000/posts/"+id)
    .pipe(map((res:number)=>{
      return res;
    }))
  }





}
