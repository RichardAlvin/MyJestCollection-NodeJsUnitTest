import DailyRotateFile from 'winston-daily-rotate-file';
import winston from "winston";

test("logging with daily rotate file", () =>{
    const logger = winston.createLogger({
        level: "info",
        transports:[
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename: "sapp-%DATE%.log",
                zippedArchive: true,
                maxSize: "1m",
                maxFiles: "1d"
            })
        ]
    });

    for (let i = 0; i < 10000; i++){
        logger.info(`Hello World ${i}`)
    }
})