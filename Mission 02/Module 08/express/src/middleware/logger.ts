import type { NextFunction, Request, Response } from "express";
import fs from "fs"


 const logger = (req : Request, res : Response, next : NextFunction) => {

    const start = Date.now();

    res.on("finish", () => {

        const duration = Date.now() - start;

        console.log(
            `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
        );

        const log = `
            [${new Date().toISOString()}]
            Method   : ${req.method}
            URL      : ${req.originalUrl}
            Status   : ${res.statusCode}
            IP       : ${req.ip}
            UserAgent: ${req.get("user-agent")}
            Duration : ${duration}ms
            --------------------------------------------------
            `;

        fs.appendFile("logger.txt", log, (err) => {
            if (err) {
                console.log("Logger Error:", err);
            }
        });
    });

    next();
}


export default logger;