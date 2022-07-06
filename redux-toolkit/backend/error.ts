import * as express from "express"
import { ValidationError } from "yup";
import { wrapError, DBError } from 'db-errors'
import Exception from "./exception";
// import {logger, logLevel } from "../utils/logger";
// const { RequestError } = require("mssql")

export const pathNotFound: express.Handler = (req, res, next) => {
    const error = new Exception(`Not found - ${req.originalUrl}`, 404);
    next(error)
}

export const errorHandler: express.ErrorRequestHandler = (error, req, res, next) => {
    error = wrapError(error);
    console.log(error)
    let log = true
    // let logLevel: logLevel = 'error';
    if (error instanceof ValidationError) {
        log = false
        res.status(400).json({
            isSuccess: false,
            statusCode: res.statusCode,
            message: error.errors,
        })
    }
    // else if (error instanceof DBError || error instanceof RequestError) {
    //     // logLevel = 'alert'
    //     res.status(400).json({
    //         isSuccess: false,
    //         statusCode: res.statusCode,
    //         message: "Bad Request - 伺服器異常"
    //     })
    // }
    else if (error.isCustomError) {
        log = true
        res.status(error.statusCode || 200).json({
            isSuccess: false,
            statusCode: error.statusCode,
            message: error.message
        })
    }
    else {
        // logLevel = 'alert'
        res.status(500).json({
            isSuccess: false,
            statusCode: res.statusCode,
            message: process.env.NODE_ENV === 'production' ? '伺服器異常, 請稍後再嘗試' : error.message,
            stack: process.env.NODE_ENV === 'production' ? undefined : error.stack
        })
    }

    // if (log) {
    //     if (req.user && req.user.empId) {
    //         logger[logLevel](req.user.empId + error)
    //     } else {
    //         logger[logLevel](error)
    //     }
    // }

}
