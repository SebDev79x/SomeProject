
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'app-navbar',
      templateUrl: './navbar.component.html',
      styleUrls: ['./navbar.component.scss']
    })
    export class NavbarComponent implements OnInit {

      constructor() {
        window.addEventListener('scroll', function(){
          var mattoolbar:any = document.querySelector("mat-toolbar");
          mattoolbar.classList.toggle("sticky", window.scrollY > 0);
        }
        )
       }

      ngOnInit(): void {
      }

    }
