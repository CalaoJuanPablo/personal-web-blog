/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const devcert = require("devcert");

const certificateDirectory = "./.certs";
const certificatePath = `${certificateDirectory}/certificate.crt`;
const keyPath = `${certificateDirectory}/privateKey.key`;

if (!fs.existsSync(certificateDirectory)) {
  fs.mkdirSync(certificateDirectory);
}

if (!fs.existsSync(certificatePath) || !fs.existsSync(keyPath)) {
  devcert
    .certificateFor("localhost")
    .then(({ key, cert }) => {
      fs.writeFileSync(keyPath, key);
      fs.writeFileSync(certificatePath, cert);
    })
    .catch(console.error);
}
