import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, Optional, Inject, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';

const LoggerConfigKey = 'LOGGER_CONFIG';

/**
 * Servicio centralizaco para mantener la observabilidad de los datos del
 * sistema, errores, logs, analíticas, etc, se utiliza para informar los reportes
 * de error a la plataforma administrativa del sistema
 *
 */
class LoggerService {
    constructor(httpClient, config = {
        allowConsole: true,
        allowRemoteLogging: false,
    }) {
        this.httpClient = httpClient;
        this.config = config;
    }
    /**
     * Reporta errores a la plataforma
     * TODO: Crear un API res para el reporte de errores
     * @param error Error a Enviar
     */
    reportError(error, config = {}) {
        config = {
            ...this.config,
            ...config,
        };
        if (config?.allowConsole) {
            console.error(error);
        }
        if (config?.allowRemoteLogging) {
            this.httpClient.post(config?.remoteURL || '', error).subscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoggerService, deps: [{ token: i1.HttpClient }, { token: LoggerConfigKey, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoggerService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoggerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [LoggerConfigKey]
                }] }]; } });

class LoggerModule {
    static forRoot(config = { allowConsole: true }) {
        return {
            ngModule: LoggerModule,
            providers: [
                { provide: LoggerConfigKey, useValue: config },
                LoggerService,
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoggerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: LoggerModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoggerModule, providers: [LoggerService], imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoggerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule],
                    providers: [LoggerService],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { LoggerConfigKey, LoggerModule, LoggerService };
//# sourceMappingURL=logger.mjs.map
