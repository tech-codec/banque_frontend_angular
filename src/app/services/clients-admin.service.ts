import { Injectable } from '@angular/core';
import {AuthentificationService} from "./authentification.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientsAdminService {
  public host:string = "http://192.168.43.235:8080";
  public jwtToken: string =this.authservice.jwtToken;

  constructor(private authservice:AuthentificationService, private http:HttpClient) { }

  getAllClient():Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get<any>(this.host+"/users",{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  deleteClient(id:any):Observable<any>{
    return this.http.delete<any>(this.host+"/users/"+id,{headers:new HttpHeaders({Authorization:this.jwtToken})})
  }


  getClientPage(currentmc: string, currentpage: number, size: number) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get(this.host + "/users/search/userpage/?mc="+currentmc+"&page="+currentpage+"&size="+size,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }
}
