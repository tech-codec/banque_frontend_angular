import { Injectable } from '@angular/core';
import {AuthentificationService} from "./authentification.service";
import {Observable} from "rxjs";
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {UpdatePaassword} from "../model/UpdatePaassword";

@Injectable({
  providedIn: 'root'
})
export class CompteClientService {
  public host:string = "http://192.168.43.235:8080";
  public jwtToken: string =this.authservice.jwtToken;

  constructor(private authservice:AuthentificationService, private http:HttpClient) { }


  ongetddetailclient(userId:string):Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get<any>(this.host+"/users/"+userId,{headers:new HttpHeaders({Authorization:this.jwtToken})})
  }

  uploadPhotoclient(file: File, userId: any): Observable<HttpEvent<{}>> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.host + '/UploadPhoto/' + userId, formdata, {
      headers:new HttpHeaders({Authorization:this.jwtToken}),
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  updateuser(form: any, id:any): Observable<any> {
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.put<any>(this.host+"/users/"+id,form,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  addCompteCourantToUser(formSolde:any, userId:any):Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.post<any>(this.host+"/addCompteCourantToUser/"+userId,formSolde,{headers:new HttpHeaders({Authorization:this.jwtToken})})
  }

  addCompteEpargneToUser(formSolde:any, userId:any):Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.post<any>(this.host+"/addCompteEpargneToUser/"+userId,formSolde,{headers:new HttpHeaders({Authorization:this.jwtToken})})
  }


  getCompteUser(userId:any):Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get<any>(this.host+"/users/"+userId+"/comptes",{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getPdfcompte(codeCp:string):Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.get<any>(this.host+"/pdfCompte/"+codeCp,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  updatePassWord(formPasword:UpdatePaassword,userId:any):Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.authservice.loadToken();
    return this.http.post<any>(this.host+"/UpdatePassword/"+userId,formPasword,{headers:new HttpHeaders({Authorization:this.jwtToken})})
  }
}
