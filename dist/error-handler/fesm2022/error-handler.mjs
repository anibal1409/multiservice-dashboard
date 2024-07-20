import * as i0 from '@angular/core';
import { Injectable, Optional, Inject, forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i2 from 'logger';
import { LoggerConfigKey, LoggerModule } from 'logger';
import { HttpErrorResponse } from '@angular/common/http';

class AlertServiceService {
    constructor() { }
    error(msg) {
        window.alert(msg);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertServiceService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertServiceService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertServiceService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

const AlertServiceKey = 'ALERT_SERVICE_KEY';
/** Nombre del método en el servicio que lanza la alerta */
const AlertMethotKey = 'ALERT_METHOD_KEY';
/** Configuración del servicios de manejo de errores */
const ErrorHandlerConfigKey = 'ERROR_HANDLER_CONFIG_KEY';

var ErrorSource;
(function (ErrorSource) {
    ErrorSource["Client"] = "CLIENT";
    ErrorSource["Server"] = "SERVER";
})(ErrorSource || (ErrorSource = {}));
/**
 * Da formato a los errores dependiendo de su origen (Cliente / servidor)
 */
class ErrorParserService {
    constructor() { }
    getClientMessage(error) {
        if (!navigator.onLine) {
            return 'No Internet Connection';
        }
        return error?.message ? error?.message : error?.toString();
    }
    getServerMessage(error) {
        let message = 'UNKNOW_SERVER_ERROR';
        if (error.code || error.statusCode) {
            message = error.description || error.message || message;
        }
        return message;
    }
    /**
     * Indica la fuente del error: HTTP ó una acción del
     * lado del cliente
     */
    getErrorAndSource(error) {
        let source = ErrorSource.Client;
        let unwrappedError = error;
        let message = error?.message;
        if (error instanceof HttpErrorResponse) {
            source = ErrorSource.Server;
            unwrappedError = error.error;
            message = this.getServerMessage(unwrappedError);
        }
        else if (error?.rejection instanceof HttpErrorResponse) {
            source = ErrorSource.Server;
            unwrappedError = error?.rejection?.error;
            message = this.getClientMessage(unwrappedError);
        }
        return {
            source,
            error: unwrappedError,
        };
    }
    getMessage(error) {
        const { source, error: ex } = this.getErrorAndSource(error);
        const parsedError = ErrorSource.Server === source
            ? this.getServerMessage(ex)
            : this.getClientMessage(ex);
        return parsedError || error?.message;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorParserService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorParserService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorParserService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class ErrorHandlerService {
    constructor(errorParserService, loggerService, configOptions, alertSevice, alertMethodName = 'error', loggerConfig) {
        this.errorParserService = errorParserService;
        this.loggerService = loggerService;
        this.configOptions = configOptions;
        this.alertSevice = alertSevice;
        this.alertMethodName = alertMethodName;
        this.loggerConfig = loggerConfig;
        this.config = {
            alertClientErrors: false,
        };
        this.config = Object.assign(this.config, configOptions);
    }
    handleError(error) {
        const parsedError = this.errorParserService.getErrorAndSource(error);
        const message = this.errorParserService.getMessage(error);
        if (parsedError.source === ErrorSource.Server ||
            (this.config.alertClientErrors &&
                parsedError.source === ErrorSource.Client && parsedError?.error?.code !== -100)) {
            this.alertSevice[this.alertMethodName](message);
        }
        this.loggerService.reportError(parsedError, this.loggerConfig);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerService, deps: [{ token: ErrorParserService }, { token: i2.LoggerService }, { token: ErrorHandlerConfigKey, optional: true }, { token: AlertServiceKey, optional: true }, { token: AlertMethotKey, optional: true }, { token: LoggerConfigKey, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ErrorParserService }, { type: i2.LoggerService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ErrorHandlerConfigKey]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [AlertServiceKey]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [AlertMethotKey]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [LoggerConfigKey]
                }] }]; } });

/**
 * Módulo manejador de errores
 */
class ErrorHandlerModule {
    static forRoot(config) {
        return {
            ngModule: ErrorHandlerModule,
            providers: [
                {
                    provide: ErrorHandlerConfigKey,
                    useValue: config,
                },
                {
                    provide: AlertServiceKey,
                    useExisting: forwardRef(() => config?.alertService) || AlertServiceService,
                },
                {
                    provide: AlertMethotKey,
                    useValue: config?.alertMethodName,
                },
                {
                    provide: LoggerConfigKey,
                    useValue: config?.loggerConfig || {
                        allowConsole: true,
                    },
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerModule, imports: [CommonModule, LoggerModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerModule, providers: [ErrorHandlerService, ErrorParserService, AlertServiceService], imports: [CommonModule, LoggerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, LoggerModule],
                    providers: [ErrorHandlerService, ErrorParserService, AlertServiceService],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AlertMethotKey, AlertServiceKey, AlertServiceService, ErrorHandlerConfigKey, ErrorHandlerModule, ErrorHandlerService, ErrorParserService, ErrorSource };
//# sourceMappingURL=error-handler.mjs.map
