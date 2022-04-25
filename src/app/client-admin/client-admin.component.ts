import { Component, OnInit } from '@angular/core';
import {ClientsAdminService} from "../services/clients-admin.service";
import {AuthentificationService} from "../services/authentification.service";

@Component({
  selector: 'app-client-admin',
  templateUrl: './client-admin.component.html',
  styleUrls: ['./client-admin.component.css']
})
export class ClientAdminComponent implements OnInit {
  code:any;

  clients:any;

  public size: number = 2;
  public currentpage: number = 0;
  public totalPages!: number;
  public currentmc:string="";
  public pages!: Array<number>;

  constructor(private clientAdminService:ClientsAdminService,public authservice:AuthentificationService) { }

  ngOnInit(): void {
  }


  ongetClients() {
    this.size = 2;
    this.code=2;
    this.clientAdminService.getClientPage(this.currentmc,this.currentpage, this.size)
      .subscribe((data:any)=>{
        this.totalPages = data['page'].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.clients = data._embedded.users;
        this.code=0;
      },(err:any)=>{
        console.log(err);
      })
  }

  onchercher(form: any) {
    console.log(form);
    this.currentpage = 0;
    this.currentmc = form.keyWord;
    this.ongetClients();
  }

  ongetPage(i: number) {
    this.currentpage = i;
    this.ongetClients();
  }

  ondeleteclient(id:any){
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.clientAdminService.deleteClient(id)
        .subscribe((resp:any)=>{

        })
    }

  }
}
