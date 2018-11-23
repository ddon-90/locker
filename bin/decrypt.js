#!/usr/bin/env node

const program = require('commander');
const logger = require('../src/logger');
const decrypt = require('../src/decrypt');

program.usage('<password> [source-path] [destination-path]');

program.on('--help', function () {
    logger.newLine();
    logger.log('Examples:');
    logger.newLine();
    logger.log('# decrypt');
    logger.log("$ safe decrypt 'password' /home/downloads/secret.locker /home/downloads");
    logger.newLine();
});


/**
 * Help
 */
const help = function() {
    program.parse(process.argv)
    if (program.args.length < 1) return program.help()
};
help();

/**
 * Settings
 */
const password = program.args[0];
const source = program.args[1];
const destination = program.args[2];

/**
 * Run
 */
decrypt(password, source, destination);