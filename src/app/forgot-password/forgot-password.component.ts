import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ForgotPassword} from "../model/ForgotPassword";
import {AuthentificationService} from "../services/authentification.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router, private authservice:AuthentificationService) { }

  ngOnInit(): void {
  }

  forgotPassword(forgotPassword:ForgotPassword){
    this.authservice.forgotPassword(forgotPassword)
      .subscribe((resp:ForgotPassword)=>{
        console.log(forgotPassword);
      },(err:any)=>{

      })
  }

  login(){
    this.router.navigateByUrl("/login")
  }


}
