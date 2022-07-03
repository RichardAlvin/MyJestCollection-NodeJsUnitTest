import winston from "winston";

test('create logger with file and console transport', () =>{
    const logger = winston.createLogger({
        level: "info",
        transports:[
            new winston.transports.Console({}),
            new winston.transports.File({
                level: "warn",
                filename: "application-warn.log"
            }),
            new winston.transports.File({
                level: "error",
                filename: "application-error.log"
            }),
        ]
    });

    logger.error("Hello Error");
    logger.warn("Hello Warn");
})
