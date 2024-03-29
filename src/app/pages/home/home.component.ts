import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/LocalStorage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private userService: UserService, private router: Router, private localStorage: LocalStorageService) {}
  showArrow :boolean=false;
  user: any;

  ngOnInit(): void {
    this.user = this.localStorage.getItem();
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
