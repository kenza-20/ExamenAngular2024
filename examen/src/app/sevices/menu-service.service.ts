import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Menu} from "../model/menu";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(private http: HttpClient) { }
  getListMenuFromBack():Observable<Menu[]>{
    return this.http.get<Menu[]>("http://localhost:3000/menu");
  }
  addMenu(data:any){
    return this.http.post('http://localhost:3000/menu',data)
  }

  getMenuById(id:any):Observable<Menu>{
    return this.http.get<Menu>('http://localhost:3000/menu/'+id)
  }

  updateMenu(id:any,data:any):Observable<Menu>{
    return this.http.put<Menu>('http://localhost:3000/menu/'+id,data)
  }
}
