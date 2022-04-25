import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthentificationService} from "../services/authentification.service";

@Component({
  selector: 'app-accueille',
  templateUrl: './accueille.component.html',
  styleUrls: ['./accueille.component.css']
})
export class AccueilleComponent implements OnInit {

  public userId:any=null;

  private  id:any;

  public compnent:any;

  public username:string="";

  public compteCourent:any;
  public compteEpargne:any;

  constructor(private router:Router, public authservice:AuthentificationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
    if(this.userId!=null){
      this.findUserByid();
    }
    //console.log(this.userId);
  }

  register(){
    this.router.navigateByUrl("/register");
  }

  onlogin(){
    this.router.navigateByUrl("/login");
  }

  logout(){
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }

  admin(){
    this.router.navigateByUrl("/admin/"+this.userId);
  }

  findUserByid(){
    this.authservice.findByid(this.userId)
      .subscribe((resp:any)=>{
        this.username = resp.username;
      })
  }

  compteClient(){
    this.compnent = 1;
    this.authservice.getCompteUser(this.userId)
      .subscribe((resp:any)=>{
        this.compteCourent = resp._embedded.compteCourants;
        this.compteEpargne = resp._embedded.compteEpargnes;
        console.log(this.compteCourent);
        console.log(this.compteEpargne);
      })
  }

  operationCompte(){
    this.compnent = 2;
  }

}
