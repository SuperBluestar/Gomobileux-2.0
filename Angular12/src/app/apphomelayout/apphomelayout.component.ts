import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-apphomelayout',
  templateUrl: './apphomelayout.component.html',
  styleUrls: ['./apphomelayout.component.scss']
})
export class ApphomelayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let header = document.getElementsByTagName('app-headermenu')[0];
    let main = document.getElementsByTagName('html')[0];

    if (main.scrollTop > 15 ) {      
      header.classList.add('active');      
    }else{
      header.classList.remove('active');
    }
  }

}
