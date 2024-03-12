import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(2), Validators.maxLength(50)]],
    lastname:['',[Validators.required,Validators.minLength(2), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required,Validators.minLength(8)]
  });
  submitted = true;
  hidePassword = true;

  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
  }


  get f (){ return this.registerForm.controls; } 

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    this.submitted= false;
    if (this.registerForm.invalid) {

      return
    } 
    console.log(this.registerForm.value)
     this.router.navigate(['/auth/login'])
  }
}   
