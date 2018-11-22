const chalk = require('chalk');

class Logger {
    
    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ timestamp, message });
        console.log(`${timestamp} - ${message}`);
    }

    success(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ timestamp, message });
        console.log(chalk.green.bold(`${timestamp} - ${message}`));
    }

    error(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ timestamp, message });
        console.log(chalk.red.bold(`${timestamp} - ${message}`));
    }
}

// Export only one instance
// Singleton pattern
module.exports = new Logger();