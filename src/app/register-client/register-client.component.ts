import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../services/authentification.service";
import {UserRegister} from "../model/UserRegister";

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  public mode: number = 0;

  constructor(private router:Router, private authservice:AuthentificationService) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl("/login")
  }

  userRegister(userRegister:UserRegister){
    this.authservice.registerUser(userRegister)
      .subscribe(
        (resp:UserRegister)=>{
          this.mode=1;
          console.log(userRegister);
        },(err:any)=>{
          this.mode=2;
        }
      )
  }

}
