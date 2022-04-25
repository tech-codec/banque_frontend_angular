import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompteClientService} from "../services/compte-client.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {OperationsService} from "../services/operations.service";

@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.css']
})
export class CompteClientComponent implements OnInit {

  @Input() public userId:any;
  public currentUser:any;
  public currentUserUp:any;
  public bloc:any;
  public selectedFiles!: any;
  public progressInfos!:any;
  private currentFileUpload: any;
  private timestamp: number = 0;
  private url:any;
  public soldec:number=0;
  public soldee:number=0;
  public mode:any;
  @Input() public compteCourent:any;
  @Input() public compteEpargne:any;
  public  idcompteC:string="";
  public idcompteE:string="";
  public updatep:any;
  public messageError:any;

  public Entite!: any;
  public size: number = 2;
  public currentpage: number = 0;
  public totalPages!: number;
  public pages!: Array<number>;

  public onpageo:any;

  constructor(private route:ActivatedRoute, public clientsevise:CompteClientService,private opservice:OperationsService) { }

  ngOnInit(): void {
    console.log(this.userId)
    this.url = this.clientsevise.host+"user/"+this.userId;
  }


  ongetUser() {
    this.clientsevise.ongetddetailclient(this.userId)
      .subscribe((resp: any) => {
        this.currentUser = resp;
        console.log(this.currentUser)
        this.bloc = 0;
        this.onpageo=null
      }, (erro: any) => {

      })
  }

  onupdateclient(userForm:any){
    this.clientsevise.updateuser(userForm,this.userId)
      .subscribe((resp:any)=>{
        this.currentUserUp = resp;
        this.uploadPhoto();
        console.log("photo chargee")
      },(err:any)=>{

    })
  }

  onSelectedFile(event: any) {
    this.progressInfos = 0;
    this.selectedFiles = event.target.files;
  }

  getTS() {
    return this.timestamp;
  }


  uploadPhoto() {
    this.currentFileUpload = this.selectedFiles.item(0);
    console.log(this.currentFileUpload)
    this.clientsevise.uploadPhotoclient(this.currentFileUpload, this.userId).subscribe((event:any) => {
      if(event.type === HttpEventType.UploadProgress){
        this.progressInfos = Math.round(100 * event.loaded / event.total);
      }else if(event instanceof HttpResponse){
        /*alert('la photo chargee avec succes');*/
        this.timestamp = Date.now();
      }
    },(err: any) => {
      alert('Probleme de chargement ');
    });
  }

  blocCompteCourent(){
    this.bloc = 1;
    this.onpageo=null
  }

  blocCompte(){
    this.bloc=5
    this.onpageo=null
  }

  blocCompteEpargne(){
    this.bloc = 2;
    this.onpageo=null
  }

  blocParamettre(){
    this.bloc = 4;
    this.onpageo=null;
  }

  addCompteCourantTouser(formsolde:any){
    this.clientsevise.addCompteCourantToUser(formsolde,this.userId)
      .subscribe((resp:any)=>{
        this.soldec= formsolde.solde;
        this.mode= 0
      })
  }


  addCompteEpargneTouser(formsolde:any){
    this.clientsevise.addCompteEpargneToUser(formsolde,this.userId)
      .subscribe((resp:any)=>{
        this.soldee = formsolde.solde;
        this.mode = 0
      })
  }

  pdfCompteCourent(){
    if(this.compteCourent!=undefined){
      this.clientsevise.getPdfcompte(this.compteCourent[0].codeCp)
        .subscribe((resp:any)=>{
          console.log("compteIMprimer");
          this.bloc =7
        })
    }
  }

  pdfCompteEpargne(){
    if(this.compteEpargne!=undefined){
      this.clientsevise.getPdfcompte(this.compteEpargne[0].codeCp)
        .subscribe((resp:any)=>{
          console.log("compteIMprimer");
          this.bloc = 3
        })
    }
  }

  updatePassword(formUpdatepassword:any){
    this.clientsevise.updatePassWord(formUpdatepassword,this.userId)
      .subscribe((resp:any)=>{
        console.log(formUpdatepassword);
        this.updatep = formUpdatepassword;
        this.mode = 0;
      },(err:any)=>{
        console.log(err);
        this.messageError = err.error.message;
        this.mode=1;
      })
  }

  listeoperationCompteE() {
    this.size = 2;
    this.opservice.listeoperationcp(this.compteEpargne[0].codeCp,this.currentpage, this.size)
      .subscribe((data:any)=>{
        this.totalPages = data.totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.Entite = data.content;
        this.bloc = 6;
        this.onpageo=1;
        console.log(data);
      },(err:any)=>{
        console.log(err);
      })
  }

  listeoperationCompteC() {
    this.size = 2;
    this.opservice.listeoperationcp(this.compteCourent[0].codeCp,this.currentpage, this.size)
      .subscribe((data:any)=>{
        this.totalPages = data.totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.Entite = data.content;
        this.bloc = 6
        this.onpageo=2
        console.log(data);
      },(err:any)=>{
        console.log(err);
      })
  }

  ongetPage(i: number) {
    this.currentpage = i;
    if (this.onpageo==1){
      this.listeoperationCompteE()
    }
    if(this.onpageo==2){
      this.listeoperationCompteC()
    }
  }

}
