import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  openNavContent = false;
  opened !: boolean;
  sidenav: any;

  constructor() { }

  ngOnInit(): void {
  }
  openContent(event: any) : void{
this.openNavContent = !this.openNavContent;
  }
  switchStatus(event: any) : void{
    console.log(event);
    if(event === true){
      this.opened = true;
    }else{
      this.opened = false; 
    }
  }
}
