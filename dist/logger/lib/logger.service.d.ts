import { HttpClient } from '@angular/common/http';
import { LoggerConfig } from './interfaces';
import * as i0 from "@angular/core";
/**
 * Servicio centralizaco para mantener la observabilidad de los datos del
 * sistema, errores, logs, analíticas, etc, se utiliza para informar los reportes
 * de error a la plataforma administrativa del sistema
 *
 */
export declare class LoggerService {
    private httpClient;
    private config;
    constructor(httpClient: HttpClient, config?: LoggerConfig);
    /**
     * Reporta errores a la plataforma
     * TODO: Crear un API res para el reporte de errores
     * @param error Error a Enviar
     */
    reportError(error: Error, config?: LoggerConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoggerService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoggerService>;
}
