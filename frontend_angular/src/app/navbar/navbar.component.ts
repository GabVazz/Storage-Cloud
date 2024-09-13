import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items: MenuItem[];
  visible: boolean = false;
  position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'top';

  constructor(public authProvider: AuthService, private router: Router) {  // Inietta il servizio AuthService
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'About',
        icon: 'pi pi-info-circle',
        routerLink: '/about'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact'
      },
      {
        label: 'Visualizza file',
        icon: 'pi pi-folder-open',
        routerLink: '/visualizzaFile'
      }
    ];
  }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
  }

  logout() {
    this.authProvider.logout();
    this.visible = false;   
  }
}
