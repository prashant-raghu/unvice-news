// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase: {
    apiKey: 'AIzaSyCzRIqx70Ao60liRmEX3LfbBYHCll-oKmk',
    authDomain: 'unvicenews.firebaseapp.com',
    databaseURL: 'https://unvicenews.firebaseio.com',
    projectId: 'unvicenews',
    storageBucket: 'unvicenews.appspot.com',
    messagingSenderId: '456941829925'
  },
 

};
