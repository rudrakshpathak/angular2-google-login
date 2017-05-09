# Angular 2 Google Login

[![version](https://img.shields.io/badge/version-v1.0.7-orange.svg)]()
[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![npm](https://img.shields.io/npm/l/express.svg)]()
[![PyPI](https://img.shields.io/badge/status-stable-brightgreen.svg)]()

## npm Package
Run `npm install angular2-google-login`.

### Import Module 
```javascript
import { AuthService, AppGlobals } from '../../node_modules/angular2-google-login';
```

### Providers 
```javascript
providers: [AuthService];
```

### Constructor 
```javascript
constructor(private _googleAuth: AuthService){}
```

### Set your Secret Google Client ID
```javascript
AppGlobals.GOOGLE_CLIENT_ID = 'SECRET_CLIENT_ID';
```

### Using the Google Login service 
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
### Common Issue
You might get error : `gapi is not defined`
It is because the service component may get loaded before `gapi` is declared. Make sure you handle it when you use the service.

SUGGESTION : Use `AfterViewInit` interface.
