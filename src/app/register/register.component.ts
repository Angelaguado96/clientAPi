import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData = {
    username: '',
    email: '',
    password: ''
  };
  hidePassword = false;

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
}
   
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
     console.log(this.formData.username,this.formData.email)
    console.log('Datos del formulario:', this.formData);
  }
}
