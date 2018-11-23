#!/usr/bin/env node

const program = require('commander');

program.version(require('../package').version)
    .usage('<command> [options]')
    .command('encrypt', 'encrypt a file or a folder')
    .command('decrypt', 'decrypt a `.locker` file')
    .parse(process.argv);