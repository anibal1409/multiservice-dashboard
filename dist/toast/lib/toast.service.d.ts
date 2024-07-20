import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class ToastService {
    private options;
    private translateService;
    constructor(options: {
        preventDuplicates: boolean;
    }, translateService: TranslateService);
    error(message: string): void;
    warning(message: string): void;
    success(message: string): void;
    info(message: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastService, [{ optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToastService>;
}
