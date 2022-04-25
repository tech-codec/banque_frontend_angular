import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OperationsService} from "../services/operations.service";
import {Operation} from "../model/Operation";

@Component({
  selector: 'app-operation-client',
  templateUrl: './operation-client.component.html',
  styleUrls: ['./operation-client.component.css']
})
export class OperationClientComponent implements OnInit {

  public userId:any;
  public codecp:string="421o";
  public compte:any = 1;
  public opsuccess:any=0;

  public Entite!: any;
  public size: number = 2;
  public currentpage: number = 0;
  public totalPages!: number;
  public pages!: Array<number>;
  constructor(private route:ActivatedRoute,private opservice:OperationsService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
  }


    consultcmpte(codecpf:any){
    this.codecp = codecpf.codecp;
    console.log(this.codecp)
    this.opservice.consultCompte(this.codecp)
      .subscribe((resp:any)=>{
        this.compte = resp;
        console.log(this.compte);
      },(eror:any)=>{
        console.log(eror.message);
      })
    this.listeoperation();
  }

  listeoperation() {
    this.size = 2;
    this.opservice.listeoperationcp(this.codecp,this.currentpage, this.size)
      .subscribe((data:any)=>{
        this.totalPages = data.totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.Entite = data.content;
        console.log(data);
      },(err:any)=>{
        console.log(err);
      })
  }

  ongetPage(i: number) {
    this.currentpage = i;
    this.listeoperation();
  }

  operation(operation:Operation){
    this.opservice.operation(operation)
      .subscribe((resp:any)=>{
        console.log(operation);
        this.opsuccess = 1;
        console.log("success")
      },(err:any)=>{

      })
  }

}
