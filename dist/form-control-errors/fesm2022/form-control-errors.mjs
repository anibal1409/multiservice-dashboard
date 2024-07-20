import * as i0 from '@angular/core';
import { InjectionToken, Component, Input, Directive, Optional, Inject, HostListener, NgModule } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i1 from '@angular/forms';

const COMMON_MESSAGES = new InjectionToken('common.messages');

const FEATURE_MESSAGES = new InjectionToken('common.messages');

class FormControlErrorsComponent {
    constructor() {
        this.message = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormControlErrorsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FormControlErrorsComponent, selector: "form-control-errors", inputs: { message: "message" }, ngImport: i0, template: `{{ message }}`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormControlErrorsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'form-control-errors', template: `{{ message }}` }]
        }], propDecorators: { message: [{
                type: Input
            }] } });

/**
 * Estandariza los errores generados por los validadores propios de Angular
 * para ser utilizacos en el servicio de internacionalización
 */
function parseError(error) {
    const keyError = Object.keys(error)[0];
    let args = {};
    switch (keyError) {
        case 'min':
            args = { min: error[keyError].min };
            break;
        case 'max':
            args = { max: error[keyError].max };
            break;
        case 'minlength':
            args = { minlength: error[keyError].requiredLength };
            break;
        case 'maxlength':
            args = { maxlength: error[keyError].requiredLength };
            break;
        default:
            break;
    }
    return {
        message: keyError,
        args,
    };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
class FormControlErrorsDirective {
    onBlur() {
        if (this.control) {
            this.validataStatus(this.control.status);
        }
    }
    constructor(componentFactoryResolver, viewContainerRef, formControlName, formControl, commonMessages, featureMessages) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.formControlName = formControlName;
        this.formControl = formControl;
        this.commonMessages = commonMessages;
        this.featureMessages = featureMessages;
        this.errorInfoComponent = null;
        this.control = null;
        this.sub$ = new Subscription();
    }
    ngOnInit() {
        this.control = this.formControlName?.control || this.formControl?.control;
        if (!this.control) {
            throw new Error('No control found, `vrt2FormControlErrors` must be used with `formControlName` or `formControl`');
        }
        const factory = this.componentFactoryResolver.resolveComponentFactory(FormControlErrorsComponent);
        this.errorInfoComponent = this.viewContainerRef.createComponent(factory);
        this.sub$.add(this.control.statusChanges?.subscribe((status) => {
            this.validataStatus(status);
        }));
        const container = this.viewContainerRef.element.nativeElement.parentElement;
        if (container) {
            const errorc = container?.querySelector('form-control-errors');
            if (errorc) {
                errorc.style.position = 'relative';
                errorc.style.left = `0.2rem`;
                errorc.style.fontSize = '0.8rem';
                errorc.style.color = 'red';
            }
        }
    }
    ngOnDestroy() {
        this.sub$.unsubscribe();
    }
    validataStatus(status) {
        if (!this.errorInfoComponent) {
            throw new Error('No error info component found');
        }
        if (['INVALID', 'DISABLED'].includes(status) && this.control?.touched) {
            this.errorInfoComponent.instance.message = this.getMessage(this.control.errors);
        }
        else if (status === 'VALID') {
            this.errorInfoComponent.instance.message = '';
        }
    }
    getMessage(errors) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { message = '', args } = parseError(errors);
        const translateKey = (this.featureMessages && this.featureMessages[message]) ||
            (this.commonMessages && this.commonMessages[message]) ||
            message;
        return translateKey;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormControlErrorsDirective, deps: [{ token: i0.ComponentFactoryResolver }, { token: i0.ViewContainerRef }, { token: i1.FormControlName, optional: true }, { token: i1.NgControl, optional: true }, { token: COMMON_MESSAGES, optional: true }, { token: FEATURE_MESSAGES, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: FormControlErrorsDirective, selector: "[formControlErrors]", host: { listeners: { "blur": "onBlur()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormControlErrorsDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[formControlErrors]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ViewContainerRef }, { type: i1.FormControlName, decorators: [{
                    type: Optional
                }] }, { type: i1.NgControl, decorators: [{
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [COMMON_MESSAGES]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [FEATURE_MESSAGES]
                }] }]; }, propDecorators: { onBlur: [{
                type: HostListener,
                args: ['blur']
            }] } });

class FormControlErrorsModule {
    static forRoot(commonMessages) {
        return {
            ngModule: FormControlErrorsModule,
            providers: [
                {
                    provide: COMMON_MESSAGES,
                    useValue: commonMessages,
                },
            ],
        };
    }
    static forChild(featureMessages) {
        return {
            ngModule: FormControlErrorsModule,
            providers: [
                {
                    provide: FEATURE_MESSAGES,
                    useValue: featureMessages,
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormControlErrorsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormControlErrorsModule, declarations: [FormControlErrorsComponent, FormControlErrorsDirective], exports: [FormControlErrorsComponent, FormControlErrorsDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormControlErrorsModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormControlErrorsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FormControlErrorsComponent, FormControlErrorsDirective],
                    imports: [],
                    exports: [FormControlErrorsComponent, FormControlErrorsDirective],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { COMMON_MESSAGES, FEATURE_MESSAGES, FormControlErrorsComponent, FormControlErrorsDirective, FormControlErrorsModule, parseError };
//# sourceMappingURL=form-control-errors.mjs.map
