const chalk = require('chalk');

class Logger {

    newLine() {
        console.log();
    }

    log(message) {
        message = message ? message : '';
        console.log(message);
    }

    success(message) {
        message = message ? message : '';
        console.log(chalk.green.bold(message));
    }

    error(message) {
        message = message ? message : '';
        console.log(chalk.red.bold(message));
    }
}

// Export only one instance
// Singleton pattern
module.exports = new Logger();