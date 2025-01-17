// logger.js

const logStyles = {
    info: 'color: cyan; font-weight: bold;',
    success: 'color: green; font-weight: bold;',
    error: 'color: red; font-weight: bold;',
    warning: 'color: orange; font-weight: bold;',
    debug: 'color: purple; font-weight: bold;',
};

// Helper function to format the log message
const formatLogMessage = (type, message) => {
    const timestamp = new Date().toLocaleString();
    return `%c[${timestamp}] [${type}] ${message}`;
};

// Logging methods
const log = (type, message) => {
    console.log(formatLogMessage(type, message), logStyles[type] || 'color: black;');
};

const info = (message) => log('info', message);
const success = (message) => log('success', message);
const error = (message) => log('error', message);
const warning = (message) => log('warning', message);
const debug = (message) => log('debug', message);

export { info, success, error, warning, debug };
