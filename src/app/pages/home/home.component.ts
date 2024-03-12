import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/LocalStorage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService, private router:Router, private localStorage : LocalStorageService) {
  }
 user:any;
  ngOnInit(): void {
this.user=this.localStorage.getItem('user');

  }
 
  SingOutButton() {
    this.userService.logout().then(Response => {
      console.log(Response)
      this.localStorage.clearLocalStorage()
     this.router.navigate(['/auth/login'])
    })
      .catch(error => console.log(error))
  }


}