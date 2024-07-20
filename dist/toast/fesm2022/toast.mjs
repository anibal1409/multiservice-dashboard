import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Optional, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import * as toastr from 'toastr';

const TOAST_OPTIONS = new InjectionToken('toast.options');

class ToastService {
    constructor(options = { preventDuplicates: true }, translateService) {
        this.options = options;
        this.translateService = translateService;
        Object.assign(toastr.options, this.options);
    }
    error(message) {
        toastr.error(this.translateService.instant(message));
    }
    warning(message) {
        toastr.warning(this.translateService.instant(message));
    }
    success(message) {
        toastr.success(this.translateService.instant(message));
    }
    info(message) {
        toastr.info(this.translateService.instant(message));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToastService, deps: [{ token: TOAST_OPTIONS, optional: true }, { token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToastService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TOAST_OPTIONS]
                }] }, { type: i1.TranslateService }]; } });

class ToastModule {
    static forRoot(options) {
        return {
            ngModule: ToastModule,
            providers: [
                {
                    provide: TOAST_OPTIONS,
                    useValue: options,
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToastModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ToastModule, imports: [CommonModule, i1.TranslateModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToastModule, providers: [ToastService], imports: [CommonModule, TranslateModule.forRoot()] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToastModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, TranslateModule.forRoot()],
                    providers: [ToastService],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TOAST_OPTIONS, ToastModule, ToastService };
//# sourceMappingURL=toast.mjs.map
