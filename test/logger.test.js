import winston from "winston";

test('Create new logger with console transport', () =>{
    const logger = winston.createLogger({
        level: "debug", //sehingga hanya level debug keatas yang keluar (bisa disetting)
        transports:[
            new winston.transports.Console({})
        ]
    });

    logger.log({
        level: "info",
        message: "Hello Logging"
    });
})

test('logging with shortcut function', () =>{
    const logger = winston.createLogger({
        level: "debug", //sehingga hanya level debug keatas yang keluar (bisa disetting)
        transports:[
            new winston.transports.Console({})
        ]
    });

    logger.error("Hello Error");
    logger.warn("Hello Warn");
})