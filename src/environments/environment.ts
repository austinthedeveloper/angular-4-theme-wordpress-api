import { WORDPRESS_CONTACT_URL } from './../app/shared/api';
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const wp = 'http://austinthedeveloper.com';

export const environment = {
  production: false,
  GApiKey: 'OTkyMTlkNWQzM2RlNDJmNTY5ZDA0MGMyNGM5YzhlOGQxZWNjMDA3Yw==',
  RetroApiKey: 'Ynk4R2liVmh6WUZPSHBuMXpZbVVxVDE5Z1BXSzV4WTc=',
  nodeServer: 'http://localhost:8080/api/',
  socketServer: 'http://localhost:8080',
  WORDPRESS_URL: `${wp}/wp-json/wp/v2`,
  WORDPRESS_CONTACT_URL: `${wp}/wp-json/contact-form-7/v1`
};
