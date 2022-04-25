import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompteClientService} from "../services/compte-client.service";

@Component({
  selector: 'app-compte-clients',
  templateUrl: './compte-clients.component.html',
  styleUrls: ['./compte-clients.component.css']
})
export class CompteClientsComponent implements OnInit {

  private userId:string="";
  private currentUser:any;
  constructor(private route:ActivatedRoute, private clientsevise:CompteClientService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
    this.ongetUser();
  }


  ongetUser(){
    this.clientsevise.ongetddetailclient(this.userId)
      .subscribe((resp:any)=>{
        this.currentUser = resp;
        console.log(this.currentUser)
      },(erro:any)=>{

      })
  }


}
