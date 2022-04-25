import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtHelperService} from '@auth0/angular-jwt';
import {UserRegister} from "../model/UserRegister";
import {ForgotPassword} from "../model/ForgotPassword";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public jwtToken!: any;
  public roles: Array<any>=[];

  public host: string = "http://192.168.43.235:8080"
  constructor(private http: HttpClient) { }

  postInlogin(user: any):Observable<any> {
    return this.http.post<any>(this.host+"/login",user,{observe:'response'});
  }

  savaToken(jwt:string){
    this.jwtToken = jwt;
    localStorage.setItem('token',jwt);
    let jwtHelper = new JwtHelperService();
    this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }

  loadToken(){
    this.jwtToken = localStorage.getItem('token');
    return this.jwtToken;
  }

  getTasks(){
    if(this.jwtToken==null)this.jwtToken = this.loadToken();
    return this.http.get(this.host+"/tasks", {headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  logout(){
    this.jwtToken = null;
    localStorage.removeItem('token');
  }


  isAdmin(){
    for(let r of this.roles){
      if(r.authority=='ADMIN') return true;
    }
    return false;
  }


  isUser(){
    for(let r of this.roles){
      if(r.authority=='USER') return true;
    }
    return false;
  }


  newTask(formtask: any):Observable<any> {
    return this.http.post<any>(this.host+"/tasks", formtask, {headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  adduser(userform: any):Observable<any> {
    return this.http.post<any>(this.host+"/register",userform);
  }

  registerUser(userRegister:UserRegister):Observable<UserRegister>{
    return this.http.post<UserRegister>(this.host+"/UserRegister",userRegister);
  }

  forgotPassword(forgotPassword:ForgotPassword):Observable<ForgotPassword>{
    return this.http.post<ForgotPassword>(this.host+"/request",forgotPassword);
  }

  findUser(username:any):Observable<any>{
    return this.http.get<any>(this.host+"/findUser/"+username);
  }

  findByid(id:any):Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.loadToken();
    return this.http.get<any>(this.host+"/users/"+id,{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

  getCompteUser(userId:any):Observable<any>{
    if(this.jwtToken==null)this.jwtToken = this.loadToken();
    return this.http.get<any>(this.host+"/users/"+userId+"/comptes",{headers:new HttpHeaders({Authorization:this.jwtToken})});
  }

}
