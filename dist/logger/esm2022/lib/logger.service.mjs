import { Inject, Injectable, Optional } from '@angular/core';
import { LoggerConfigKey } from './interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * Servicio centralizaco para mantener la observabilidad de los datos del
 * sistema, errores, logs, analíticas, etc, se utiliza para informar los reportes
 * de error a la plataforma administrativa del sistema
 *
 */
export class LoggerService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9sb2dnZXIvc3JjL2xpYi9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUU3RDs7Ozs7R0FLRztBQUdILE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQ1UsVUFBc0IsRUFHdEIsU0FBdUI7UUFDN0IsWUFBWSxFQUFFLElBQUk7UUFDbEIsa0JBQWtCLEVBQUUsS0FBSztLQUMxQjtRQU5PLGVBQVUsR0FBVixVQUFVLENBQVk7UUFHdEIsV0FBTSxHQUFOLE1BQU0sQ0FHYjtJQUNBLENBQUM7SUFFSjs7OztPQUlHO0lBQ0gsV0FBVyxDQUFDLEtBQVksRUFBRSxTQUF1QixFQUFFO1FBQ2pELE1BQU0sR0FBRztZQUNQLEdBQUcsSUFBSSxDQUFDLE1BQU07WUFDZCxHQUFHLE1BQU07U0FDVixDQUFDO1FBQ0YsSUFBSSxNQUFNLEVBQUUsWUFBWSxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEI7UUFFRCxJQUFJLE1BQU0sRUFBRSxrQkFBa0IsRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBTSxNQUFNLEVBQUUsU0FBUyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN2RTtJQUNILENBQUM7K0dBNUJVLGFBQWEsNENBSWQsZUFBZTttSEFKZCxhQUFhOzs0RkFBYixhQUFhO2tCQUR6QixVQUFVOzswQkFJTixRQUFROzswQkFDUixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2dnZXJDb25maWcsIExvZ2dlckNvbmZpZ0tleSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbi8qKlxuICogU2VydmljaW8gY2VudHJhbGl6YWNvIHBhcmEgbWFudGVuZXIgbGEgb2JzZXJ2YWJpbGlkYWQgZGUgbG9zIGRhdG9zIGRlbFxuICogc2lzdGVtYSwgZXJyb3JlcywgbG9ncywgYW5hbMOtdGljYXMsIGV0Yywgc2UgdXRpbGl6YSBwYXJhIGluZm9ybWFyIGxvcyByZXBvcnRlc1xuICogZGUgZXJyb3IgYSBsYSBwbGF0YWZvcm1hIGFkbWluaXN0cmF0aXZhIGRlbCBzaXN0ZW1hXG4gKlxuICovXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChMb2dnZXJDb25maWdLZXkpXG4gICAgcHJpdmF0ZSBjb25maWc6IExvZ2dlckNvbmZpZyA9IHtcbiAgICAgIGFsbG93Q29uc29sZTogdHJ1ZSxcbiAgICAgIGFsbG93UmVtb3RlTG9nZ2luZzogZmFsc2UsXG4gICAgfVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJlcG9ydGEgZXJyb3JlcyBhIGxhIHBsYXRhZm9ybWFcbiAgICogVE9ETzogQ3JlYXIgdW4gQVBJIHJlcyBwYXJhIGVsIHJlcG9ydGUgZGUgZXJyb3Jlc1xuICAgKiBAcGFyYW0gZXJyb3IgRXJyb3IgYSBFbnZpYXJcbiAgICovXG4gIHJlcG9ydEVycm9yKGVycm9yOiBFcnJvciwgY29uZmlnOiBMb2dnZXJDb25maWcgPSB7fSk6IHZvaWQge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgLi4uY29uZmlnLFxuICAgIH07XG4gICAgaWYgKGNvbmZpZz8uYWxsb3dDb25zb2xlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnPy5hbGxvd1JlbW90ZUxvZ2dpbmcpIHtcbiAgICAgIHRoaXMuaHR0cENsaWVudC5wb3N0PGFueT4oY29uZmlnPy5yZW1vdGVVUkwgfHwgJycsIGVycm9yKS5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==