import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthentificationService} from "./authentification.service";
import {Operation} from "../model/Operation";

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  private host:string = "http://192.168.43.235:8080";
  public jwtToken: string =this.authservice.jwtToken;

  constructor(private http:HttpClient, private authservice:AuthentificationService ) { }


  consultCompte(codecp:string):Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    console.log(this.jwtToken);
    return this.http.get<any>(this.host+"/consultCp/"+codecp,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  operation(operation:Operation):Observable<Operation>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.post<Operation>(this.host+"/Operation",operation,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }


  listeoperationcp(codecp:string, page:number, size:number):Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get<any>(this.host+"/listeoperation/"+codecp+"/"+page+"/"+size,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }


}
