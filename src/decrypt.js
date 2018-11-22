const crypto = require('crypto');
const fs = require('fs');
const chalk = require('chalk');

const { algorithm, password } = require('./config.js');

const decipher = crypto.createDecipher(algorithm, password);

const input = fs.createReadStream('data/encrypted.locker');
const output = fs.createWriteStream('data/decrypted.pdf');

input.pipe(decipher).pipe(output);

output.on('finish', () => {
    console.log(chalk.green.bold('Decrypted file written to disk!'));
});