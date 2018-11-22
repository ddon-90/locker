const crypto = require('crypto');
const fs = require('fs');
const { algorithm, password } = require('./config/index.js');

const cipher = crypto.createCipher(algorithm, password);

const input = fs.createReadStream('data/data_sample.pdf');
const output = fs.createWriteStream('data/encrypted.locker');

input.pipe(cipher).pipe(output);

output.on('finish', () => {
    console.log('Encrypted file written to disk!');
});