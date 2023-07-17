import { Component , OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../../servicios/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{

  user: User = new User();
  route: string;
  analytics: any;

  constructor(public sidebarservice: SidebarService, location: Location, router: Router) {

    router.events.subscribe((val) => {
      if(location.path() == '/dashboard/analytics'){
        $('html').removeAttr('class')
        this.analytics =true;
      } else {
        this.analytics =false;
        if(location.path() == '/dashboard/e-commerce'){
          $('html').removeAttr('class')
          $('html').addClass('color-sidebar sidebarcolor3 color-header headercolor1')
        } else {
          if(location.path() == '/dashboard/alternate'){
            $('html').removeAttr('class')
            $('html').addClass('color-sidebar sidebarcolor3')
          } else{
            if(location.path() == '/dashboard/hospitality'){
              $('html').removeAttr('class')
              $('html').addClass('color-sidebar sidebarcolor3 color-header headercolor5')
            }

          }
        }
      }
    });

  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.user.userId = window.localStorage.getItem('idUsuario');
    /* Search Bar */
    $(document).ready(function () {
      $(".mobile-search-icon").on("click", function () {
        $(".search-bar").addClass("full-search-bar")
      }),
        $(".search-close").on("click", function () {
          $(".search-bar").removeClass("full-search-bar")
        })
    });

  }
  cerrarSession(): any{
    window.localStorage.clear();
  }
}
