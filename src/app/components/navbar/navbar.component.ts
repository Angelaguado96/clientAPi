import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/LocalStorage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private userService: UserService, private router: Router, private localStorage: LocalStorageService) {}
  
  user: any;
  showNavbar: boolean = true;

  ngOnInit(): void {
    this.user = this.localStorage.getItem();
    this.router.events.subscribe(() => {
      this.showNavbar = !this.router.url.includes('auth/register') && !this.router.url.includes('auth/login');
    });
  }
  SingOutButton() {
    this.userService.logout()
      .then(response => {
        console.log(response);
        this.localStorage.clearLocalStorage();
        this.router.navigate(['/auth/login']);
      })
      .catch(error => console.log(error));
  }

  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
