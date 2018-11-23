const fs = require('fs');
const chalk = require('chalk');
const logger = require('./logger');

const check = (password, source, destination) => {

    // check if source path exists
	if(!fs.existsSync(source)) {
		logger.newLine();
		logger.error('Source path was not found! Please make sure that the source path is correct.');
		logger.newLine();
		return false;
	}

	// check if the destination path already exists
    // we don't want to overwrite some random file
	if(fs.existsSync(destination)) {
		logger.newLine();
		logger.error('Wrong destionation path! Please make sure that the destination path points to an unexisting file.');
		logger.newLine();
		return false;
    }
    
    // Check password
	if(!password) {
		logger.newLine();
		logger.error('Missing password! You must set a password to encrypt the file.');
		logger.newLine();
		return false;
	}

	return true;
};

module.exports = {
    check
}