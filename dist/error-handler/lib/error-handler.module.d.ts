import { ModuleWithProviders } from '@angular/core';
import { ErrorHandlerConfig } from './interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "logger";
/**
 * Módulo manejador de errores
 */
export declare class ErrorHandlerModule {
    static forRoot<T>(config?: ErrorHandlerConfig<T>): ModuleWithProviders<ErrorHandlerModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorHandlerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ErrorHandlerModule, never, [typeof i1.CommonModule, typeof i2.LoggerModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ErrorHandlerModule>;
}
