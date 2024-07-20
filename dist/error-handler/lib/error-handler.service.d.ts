import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { LoggerConfig, LoggerService } from 'logger';
import { ErrorParserService } from './error-parser';
import { ErrorHandlerConfig } from './interfaces';
import * as i0 from "@angular/core";
export declare class ErrorHandlerService implements ErrorHandler {
    private errorParserService;
    private loggerService;
    private configOptions;
    private alertSevice;
    private alertMethodName;
    private loggerConfig;
    private config;
    constructor(errorParserService: ErrorParserService, loggerService: LoggerService, configOptions: ErrorHandlerConfig, alertSevice: any, alertMethodName: string, loggerConfig: LoggerConfig);
    handleError(error: Error | HttpErrorResponse): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorHandlerService, [null, null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorHandlerService>;
}
