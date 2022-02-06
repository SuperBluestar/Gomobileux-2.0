import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

  isChecked: boolean = false;
  isdarkmode: boolean = false;
  isrtl: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }


  stylechange(e: any) {
    let currentcss = document.getElementById('style');
    this.isChecked = !this.isChecked;
    let setstyle = e.target.getAttribute('data-title');
    this.renderer.setAttribute(currentcss, 'href', 'assets/css/style-' + setstyle + '.css');
  }

  modechangedark(e: any) {
    const html = document.getElementsByTagName('html')[0];
    this.isdarkmode = true;
    html.classList.add('dark-mode');
  }
  
  modechangelight(e: any) {
    const html = document.getElementsByTagName('html')[0];
    this.isdarkmode = false;
    html.classList.remove('dark-mode');
  }

  layoutrtl(e: any) {
    const body = document.getElementsByTagName('body')[0];
    this.isrtl = true;
    body.classList.add('rtl');
  }

  layoutltr(e: any) {
    const body = document.getElementsByTagName('body')[0];
    this.isrtl = false;
    body.classList.remove('rtl');
  }
  


}
