// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// local: backURL: 'http://127.0.0.1:8000/api'
export const environment = {
  production: true,
  MAPBOX:
    'pk.eyJ1IjoiYXJtYWdlZG9uIiwiYSI6ImNrcDhreXBycDAycnUyd3A0anA3dm00eXQifQ.Ah8m9bt7fXdX9Ut-PmKBLg',
  dialogflow: {
    chatBot: '',
  },
  backURL: 'https://1a9a-2800-cd0-2a1c-2000-684d-76e7-f3dc-52fa.ngrok.io/api',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
