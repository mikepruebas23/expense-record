import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.css']
})
export class SidenavLayoutComponent implements OnInit {

  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidenav(didOpenClose: boolean){
    this.opened = didOpenClose;
  }

}
