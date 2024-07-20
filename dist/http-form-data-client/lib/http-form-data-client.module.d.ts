import { ModuleWithProviders } from '@angular/core';
import { ClientOptions } from './interfaces';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/common/http";
export declare class HttpFormDataClientModule {
    static forRoot(options?: ClientOptions): ModuleWithProviders<HttpFormDataClientModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpFormDataClientModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HttpFormDataClientModule, never, [typeof i1.CommonModule, typeof i2.HttpClientModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HttpFormDataClientModule>;
}
