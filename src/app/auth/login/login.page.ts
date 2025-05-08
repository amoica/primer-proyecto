import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ) { 
    this.loginForm = fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onLogin(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((resp:any)=>{
      alert("Inicio Sesión con Exito wey");
      this.router.navigate(["/home"]);
    })
  }

}
