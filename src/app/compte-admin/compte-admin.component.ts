import { Component, OnInit } from '@angular/core';
import {ClientsAdminService} from "../services/clients-admin.service";
import {AuthentificationService} from "../services/authentification.service";
import {ComptesAdminService} from "../services/comptes-admin.service";

@Component({
  selector: 'app-compte-admin',
  templateUrl: './compte-admin.component.html',
  styleUrls: ['./compte-admin.component.css']
})
export class CompteAdminComponent implements OnInit {

  code:any;

  compteEpargnes:any;
  compteCourents:any;

  public size: number = 2;
  public currentpage: number = 0;
  public totalPages!: number;
  public currentmc:string="";
  public pages!: Array<number>;

  constructor(private compteAdminService:ComptesAdminService,public authservice:AuthentificationService) { }

  ngOnInit(): void {
  }


  ongetComptes() {
    this.size = 2;
    this.code=2;
    this.compteAdminService.getComptePage(this.currentmc,this.currentpage, this.size)
      .subscribe((data:any)=>{
        this.totalPages = data['page'].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.compteEpargnes= data._embedded.compteEpargnes;
        this.compteCourents= data._embedded.compteCourants;
        this.code=0;
      },(err:any)=>{
        console.log(err);
      })
  }

  onchercher(form: any) {
    console.log(form);
    this.currentpage = 0;
    this.currentmc = form.keyWord;
    this.ongetComptes();
  }

  ongetPage(i: number) {
    this.currentpage = i;
    this.ongetComptes();
  }

  ondeletecompte(id:any){
    let conf = confirm("Etes vous sûr?");
    if(conf){
      this.compteAdminService.deleteCompte(id)
        .subscribe((resp:any)=>{

        })
    }

  }
}
