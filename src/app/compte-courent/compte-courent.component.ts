import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-compte-courent',
  templateUrl: './compte-courent.component.html',
  styleUrls: ['./compte-courent.component.css']
})
export class CompteCourentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  private userId: string="";

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
  }

}
