// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url : 'http://localhost:1234/user',
  url_login : 'http://localhost:1234/login',
  map_token : 'pk.eyJ1IjoiaWJzaG9wbm93IiwiYSI6ImNraGc0YjFvMjAwM2kyenA2M24wOXRzdGsifQ.aGOE2XXEVhnYHrWbOQKlsw',
  firebase: {
    apiKey: "AIzaSyBuk6iEBDtO05qudhfeD5ZL1Z10wsKqf-A",
    authDomain: "quick-errand-6580c.firebaseapp.com",
    databaseURL: "https://quick-errand-6580c.firebaseio.com",
    projectId: "quick-errand-6580c",
    storageBucket: "quick-errand-6580c.appspot.com",
    messagingSenderId: "12841148517",
    appId: "1:12841148517:web:a52dbd244620078467668c"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
