import { Component, OnInit } from '@angular/core';
import { AuthService } from './google-authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  providers:[AuthService]
})
export class LoginComponent implements OnInit{
  imageURL  : string;
  email : string;
  name  : string; 
  token  : string; 

  constructor(private auth :AuthService){}

  ngOnInit(){
     this.setData();
  }

  /**
   * Calling Google Authentication service
   */
  googleAuthenticate(){
    this.auth.authenticateUser(function (data){
      if(data){
        localStorage.setItem('token', data.token);
        localStorage.setItem('image', data.image);
        localStorage.setItem('name', data.name);
        localStorage.setItem('email', data.email);
      }
    });
    this.setData();
  }

  /**
   * Setting data in browser's local storage
   */
  setData(){
    this.token = localStorage.getItem('token');
    this.imageURL = localStorage.getItem('image');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
  }

  /**
   * Logout user and calls function to clear the localstorage
   */
  logout(){
    let scopeReference = this;
    this.auth.userLogout(function(){
      scopeReference.clearLocalStorage();
    });
  }
  
  /**
   * Clearing Localstorage of browser
   */
  clearLocalStorage(){
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }
}
