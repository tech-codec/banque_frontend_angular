import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AuthentificationService} from "../services/authentification.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class NavbarComponent implements OnInit {

  @Input() public userId:any;
  @Input()  public username!:string;

  width:number = window.innerWidth;
  height:number = window.innerHeight;
  test : Date = new Date();

  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(location: Location,  private element: ElementRef, private router: Router, public authservice:AuthentificationService) {
    this.sidebarVisible = false;
  }

  ngOnInit(){
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0]
  }

  logout(){
    this.authservice.logout();
    this.router.navigateByUrl("/login");
  }


  /*************************************************************************/

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function(){
      toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');

    this.sidebarVisible = true;
  };

  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  };
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };

  isMobileMenu() {
    if (this.width> 991) {
      return false;
    }
    return true;
  };


  onWindowResize(event:any) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
  }

}
