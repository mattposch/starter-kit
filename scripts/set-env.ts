import {writeFile} from 'fs';
import {argv} from 'yargs';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const environment = argv.environment;
const isProd = environment === 'prod';

let targetPath = `./src/environments/environment.ts`;
if (environment && environment !== 'dev') {
  targetPath = `./src/environments/environment.${environment}.ts`;
}

const envConfigFile = `
export const environment = {
  production: ${isProd},
  superSecretKey: '${process.env.SUPER_SECRET_CRED1}',
  superDoubleSecret: '${process.env.SUPER_SECRET_CRED2}',
  version: '(dev)',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ],
  foo: '${process.env.FOO}',
  mail: {
    apikey:     '${process.env.MAIL_APIKEY}',
    domain:     '${process.env.MAIL_DOMAIN || 'mydomain.com'}',
    enabled:    ${process.env.ENABLE_MAIL === 'true' || false},
    sender:     '${process.env.MAIL_SENDER || 'no-reply@mydomain.com'}',
  }
};
`;

writeFile(targetPath, envConfigFile, function (err: any) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
