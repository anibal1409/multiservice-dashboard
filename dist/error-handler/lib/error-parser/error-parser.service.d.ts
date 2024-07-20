import { HttpErrorResponse } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare enum ErrorSource {
    Client = "CLIENT",
    Server = "SERVER"
}
export interface CustomError extends Error {
    path: string;
    statusCode: number;
    /** Código interno de la aplicación */
    code?: string;
    timestamp: Date;
    /** Provee más detalles del error,( Traducido) */
    description?: string;
}
export interface ParsedError {
    source: ErrorSource;
    error: any;
    message?: string;
}
/**
 * Da formato a los errores dependiendo de su origen (Cliente / servidor)
 */
export declare class ErrorParserService {
    constructor();
    getClientMessage(error: Error): string;
    getServerMessage(error: CustomError): string;
    /**
     * Indica la fuente del error: HTTP ó una acción del
     * lado del cliente
     */
    getErrorAndSource(error: any): ParsedError;
    getMessage(error: Error | HttpErrorResponse): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorParserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ErrorParserService>;
}
