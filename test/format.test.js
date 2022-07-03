import winston from "winston";

test('Logging with format', () =>{
    const logger = winston.createLogger({
        level: "debug", //sehingga hanya level debug keatas yang keluar (bisa disetting)
        format: winston.format.simple(),
        // format:winston.format.logstash(),
        transports:[
            new winston.transports.Console({})
        ]
    });

    logger.error("Hello Error");
    logger.warn("Hello Warn");
})

test('Logging with printf format', () =>{
    const logger = winston.createLogger({
        level: "debug", //sehingga hanya level debug keatas yang keluar (bisa disetting)
        format: winston.format.printf(log =>{
            return `${new Date()}: ${log.level.toUpperCase()}: ${log.message}`;
        }),
        transports:[
            new winston.transports.Console({})
        ]
    });

    logger.error("Hello Error");
    logger.warn("Hello Warn");
})