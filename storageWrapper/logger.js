/**
 * Logger class for handling logging throughout the application.
 * @version 1.0.0
 */

export class Logger {

    logInfo (message) {
        console.info(`[INFO] ${message}`)
    }

    logError (message) {
        console.error(`[ERROR] ${message}`)
    }

}