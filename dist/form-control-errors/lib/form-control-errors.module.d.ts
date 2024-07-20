import { ModuleWithProviders } from '@angular/core';
import { ErrorMessages } from './models';
import * as i0 from "@angular/core";
import * as i1 from "./form-control-errors.component";
import * as i2 from "./form-control-errors.directive";
export declare class FormControlErrorsModule {
    static forRoot(commonMessages: ErrorMessages): ModuleWithProviders<FormControlErrorsModule>;
    static forChild(featureMessages?: ErrorMessages): ModuleWithProviders<FormControlErrorsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormControlErrorsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FormControlErrorsModule, [typeof i1.FormControlErrorsComponent, typeof i2.FormControlErrorsDirective], never, [typeof i1.FormControlErrorsComponent, typeof i2.FormControlErrorsDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FormControlErrorsModule>;
}
