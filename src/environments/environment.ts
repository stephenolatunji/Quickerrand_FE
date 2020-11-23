// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url : 'http://localhost:1234/user',
  url_login : 'http://localhost:1234/login',
  map_token : 'pk.eyJ1IjoiaWJzaG9wbm93IiwiYSI6ImNraGc0YjFvMjAwM2kyenA2M24wOXRzdGsifQ.aGOE2XXEVhnYHrWbOQKlsw',
  firebase: {
    apiKey: "AIzaSyDh3py--hQybEzx04tgtIj4kbpaWNM7504",
    authDomain: "quick-errand.firebaseapp.com",
    databaseURL: "https://quick-errand.firebaseio.com",
    projectId: "quick-errand",
    storageBucket: "quick-errand.appspot.com",
    messagingSenderId: "549701543921",
    appId: "1:549701543921:web:ac4966bf298dc123b70650"
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
