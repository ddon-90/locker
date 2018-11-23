#!/usr/bin/env node

const program = require('commander');
const logger = require('../src/logger');
const encrypt = require('../src/encrypt');

program.usage('<password> [source-path] [destination-path]');

program.on('--help', function () {
    logger.newLine();
    logger.log('Examples:');
    logger.newLine();
    logger.log('# encrypt a single file');
    logger.log("$ locker encrypt 'password' /home/downloads/secret.pdf /home/downloads/secret.safe");
    logger.newLine();
    logger.log('# encrypt a folder and all files recursively');
    logger.log("$ locker encrypt 'password' /home/downloads/secret-folder /home/downloads/mydocs.safe");
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
encrypt(password, source, destination);