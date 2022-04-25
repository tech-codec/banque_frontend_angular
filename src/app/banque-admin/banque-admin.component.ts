import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthentificationService} from "../services/authentification.service";

@Component({
  selector: 'app-banque-admin',
  templateUrl: './banque-admin.component.html',
  styleUrls: ['./banque-admin.component.css'],

})
export class BanqueAdminComponent implements OnInit {

  public userId:any;

  public username!:string;

  constructor(private element: ElementRef, public route:ActivatedRoute,public authservice:AuthentificationService) {

  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id
    if(this.userId!=null){
      this.findUserByid()
    }
  }


  findUserByid(){
    this.authservice.findByid(this.userId)
      .subscribe((resp:any)=>{
        this.username = resp.username;
      })
  }

   /************************************************************************/




}
