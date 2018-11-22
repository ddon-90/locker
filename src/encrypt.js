const crypto = require('crypto');
const fs = require('fs');
const chalk = require('chalk');
const logger = require('./logger');
const helper = require('./helper');

const { algorithm, extension } = require('./config.js');

const encrypt = (source, destination, password) => {
    // First check
    if (helper.check(source, destination, password)) {

        const cipher = crypto.createCipher(algorithm, password);
        
        const input = fs.createReadStream(source);
        const output = fs.createWriteStream(`d${destination}.${extension}`);
        
        input.pipe(cipher).pipe(output);

        output.on('error', (err) => {
            logger.error(`Error: ${err.message}`);
        });

        output.on('finish', () => {
            logger.success('Encrypted file written to disk!');
        });
    }
}

encrypt('data/data_sample.pdf', 'data/encrypted-1');

module.exports = encrypt;