import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/service/LocalStorage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup= this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.minLength(8)]
  });
  hidePassword = true;

  constructor(private fb: FormBuilder, private userService:UserService, private router:Router,private LocalStorage:LocalStorageService) {}

  ngOnInit(): void {
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return
    }
    console.log(
      this.loginForm.value
    )
    this.router.navigate(['/'])
  }

  get f (){return this.loginForm.controls; }

  loginGoogle(){
    this.userService.LoginWithGoogle().then(Response => {
      console.log(Response.user);
      this.LocalStorage.setItem('user',Response)
      this.router.navigate(['/'])
    }).catch(error => console.log(error))
  }

  loginGithub(){
    this.userService.loginWithGithub()
    .then(Response=>{console.log(Response)
      this.LocalStorage.setItem('user',Response)
      this.router.navigate(['/'])
    })
    .catch(error=>console.log(error))
  }
}   
