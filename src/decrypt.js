const crypto = require('crypto');
const fs = require('fs');
const chalk = require('chalk');
const logger = require('./logger');
const helper = require('./helper');

const { algorithm } = require('./config.js');

const decrypt = (password, source, destination) => {
    // First check
    if (helper.check(password, source, destination)) {

        const decipher = crypto.createDecipher(algorithm, password);
        
        const input = fs.createReadStream(source);
        const output = fs.createWriteStream(destination);
        
        input.pipe(decipher).pipe(output);

        input.on('error', (err) => {
            logger.newLine();
            logger.error(err.message);
            logger.newLine();
        });

        output.on('error', (err) => {
            logger.newLine();
            logger.error(err.message);
            logger.newLine();
        });

        output.on('finish', () => {
            logger.newLine();
            logger.success('Decrypted file written to disk!');
            logger.newLine();
        });
    }
}

module.exports = decrypt;