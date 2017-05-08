import { Injectable } from '@angular/core';
import { AppGlobals } from '../app-globals';
import { Http } from '@angular/http';

declare const gapi: any;

@Injectable()
export class AuthService {
  constructor(private http: Http) { }

  /**
   * Calling Google login API and fetching account details.
   * @param callback Callback to function
   */
  public authenticateUser(callback) {
    let auth2: any;
    let result: any;

    gapi.load('auth2', function () {
      auth2 = gapi.auth2.init({
        client_id: AppGlobals.GOOGLE_CLIENT_ID,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      //Login button reference
      let element:any = document.getElementById('google-login-button');
      auth2.attachClickHandler(element, {},
        function (googleUser) {
          //Getting profile object
          let profile = googleUser.getBasicProfile();
          
          //Setting data to localstorage.
          localStorage.setItem('token', googleUser.getAuthResponse().id_token);
          localStorage.setItem('image', profile.getImageUrl());
          localStorage.setItem('name', profile.getName());
          localStorage.setItem('email', profile.getEmail());

          //Alternatively you can create an object and return it like that -
          // result = {
          //   token: googleUser.getAuthResponse().id_token,
          //   name: profile.getName(),
          //   image: profile.getImageUrl(),
          //   email: profile.getEmail(),
          // };
          callback(true);
        }, function (error) {
          alert(JSON.stringify(error, undefined, 2));
        });
    });
  }

  /**
   * Logout user from Google
   * @param callback Callback to function
   */
  userLogout(callback) {
    //You will be redirected to this URL after logging out from Google.
    let homeUrl = "http://localhost:4200";
    let logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" + homeUrl;
    document.location.href = logoutUrl;
    callback();
  }
}
