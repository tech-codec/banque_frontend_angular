import { Injectable } from '@angular/core';
import {AuthentificationService} from "./authentification.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ComptesAdminService {
  public host:string = "http://192.168.43.101:8080";
  public jwtToken: string =this.authservice.jwtToken;

  constructor(private authservice:AuthentificationService, private http:HttpClient) { }

  getAllComptes():Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get<any>(this.host+"/users",{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  deleteCompte(id:any):Observable<any>{
    return this.http.delete<any>(this.host+"/comptes/"+id,{headers:new HttpHeaders({Authorization:this.jwtToken})})
  }


  getComptePage(currentmc: string, currentpage: number, size: number) {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get(this.host + "/comptes/search/comptepage/?mc="+currentmc+"&page="+currentpage+"&size="+size,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }
}
