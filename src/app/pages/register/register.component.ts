import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service
import { User } from '../../types/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  account: User = {
    fullname: "",
    email: "",
    password: "",
  }

  valid = {
    username: "",
    email: "",
    password: "",
  }

  isRegister = false;

  constructor(private auth: AuthService) { }

  handleValidFormRegister() {
   if(!this.account.fullname){
    this.valid.username = `Username is required`;
    this.isRegister = false;
   }
   if(!this.account.password){
    this.valid.password = `Password is required`;
    this.isRegister = false;
   }
   if(!this.account.email){
    this.valid.email = `Email is required`;
    this.isRegister = false;
   }

   if(this.account.email && this.account.password && this.account.fullname) this.isRegister = true;

   return this.isRegister;
  }

  handleSubmitRegister() {
    if(this.handleValidFormRegister()) return;
    this.auth.registerAccount(this.account);
  }
}
