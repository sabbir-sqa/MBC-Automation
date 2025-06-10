//utils/logger.js

const winston = require('winston');
const { format, transports } = winston;
const { combine, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: &{message}`;
});

const logger = winston.createLogger({
  level: 'debug',
  format: combine(format.timestamp(), logFormat),
  transports: [new transports.Console()],
});

module.exports = { logger };
