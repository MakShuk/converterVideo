"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
class ConsoleLogger {
    constructor() { }
    static getInstance() {
        if (!ConsoleLogger) {
            ConsoleLogger.instnce = new ConsoleLogger();
        }
        return ConsoleLogger.instnce;
    }
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.log('Error');
    }
    end() {
        console.log('END');
    }
}
exports.ConsoleLogger = ConsoleLogger;
