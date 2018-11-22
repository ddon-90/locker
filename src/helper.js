const fs = require('fs');
const chalk = require('chalk');
const logger = require('./logger');

const { extension } = require('./config.js');

const check = (src, dst, psw) => {

    // check if source path exists
    const source = src;
	if(!fs.existsSync(source)) {
		logger.error('Source path was not found! Please make sure that the source path is correct.');
		return false;
	}

	// check if the destination path already exists
    // we don't want to overwrite some random file
    const destination = `${dst}.${extension}`;
	if(fs.existsSync(destination)) {
		logger.error('Wrong destionation path! Please make sure that the destination path points to an unexisting file.');
		return false;
    }
    
    // Check password
    const password = psw;
	if(!password) {
		logger.error('Missing password! You must set a password to encrypt the file.');
		return false;
	}

	return true;
};

module.exports = {
    check
}