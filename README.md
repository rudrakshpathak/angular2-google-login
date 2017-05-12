# Angular 2 Google Login
This is a sample app showing how we can login using Google authentication in Angular2.

You can visit npm for more info on [angular2-google-login package](https://www.npmjs.com/package/angular2-google-login)

[![version](https://img.shields.io/badge/version-v1.0.7-orange.svg)]()
[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![npm](https://img.shields.io/npm/l/express.svg)]()
[![PyPI](https://img.shields.io/badge/status-stable-brightgreen.svg)]()

### To use the package in your app
Run `npm install angular2-google-login`

### Import Package 
Import this package where you want to use Google authentication service. 
```javascript
import { AuthService, AppGlobals } from 'angular2-google-login';
```

### Providers
Supply the provider.
```javascript
providers: [AuthService];
```

### Constructor 
```javascript
constructor(private _googleAuth: AuthService){}
```

### Set your Secret Google Client ID
Set your Google client Id. preferably in `ngOnInit()` interface.
```javascript
AppGlobals.GOOGLE_CLIENT_ID = 'SECRET_CLIENT_ID';
```

### Using the Google Login service 
Use this code snippet to call the Google authentiation service. You can call it in a function triggered by a button click or in your desired event.
```javascript
this._googleAuth.authenticateUser(()=>{
      //YOUR_CODE_HERE
    });
```

### Logout user
```javascript
this._googleAuth.userLogout(()=>{
      //YOUR_CODE_HERE
    });
```

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

---
### Known Issue
You might get error : `gapi is not defined`
It is because the service component may get loaded before `gapi` is declared. Make sure you handle it when you use the service.

SUGGESTION : Use `AfterViewInit` interface.
