import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../services/authentification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mode: number = 0;

  public etaConex:number =0;

  public  userId:number =0;

  message: string = "Hola Mundo!";

  constructor(private router:Router, private authservice:AuthentificationService) { }

  ngOnInit(): void {
  }

  inlogin(user: any) {
    console.log(user);
    this.authservice.postInlogin(user)
      .subscribe((resp:any)=>{
        this.etaConex = 1;
        let jwtToken = resp.headers.get('Authorization');
        this.authservice.savaToken(jwtToken);
        this.authservice.findUser(user.username).subscribe(
          (resp1:any)=>{
            this.userId = resp1.id;
            if(this.authservice.isUser()){
              this.router.navigateByUrl("/accueille/"+this.userId);
            }
            if(this.authservice.isAdmin()){
              this.router.navigateByUrl("/admin/"+this.userId);
            }

            this.mode= 0;
            console.log(jwtToken);
            console.log(user.username);
          }
        );
      },(err:any)=>{
        this.mode= 1;
      })
  }

  forgotPassword(){
    this.router.navigateByUrl("/forgot-password")
  }

  register(){
    this.router.navigateByUrl("/register");
  }
}
