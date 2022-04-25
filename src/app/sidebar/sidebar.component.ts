import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  code:number = 1;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  isMobileMenu() {
    if ( window.innerWidth > 991) {
      return false;
    }
    return true;
  };

  ongetClient(){
    this.router.navigateByUrl("/client-admin");
  }
  ongetOperation(){
    this.router.navigateByUrl("/operation-admin")
  }

  ongetCompte(){
    this.router.navigateByUrl("/compte-admin")
  }

  ongetCompteadmin(){
    this.router.navigateByUrl("/compte-admin")
  }

}
