import { ComponentFactoryResolver, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormControlName, NgControl, ValidationErrors } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class FormControlErrorsDirective implements OnInit, OnDestroy {
    private readonly componentFactoryResolver;
    private readonly viewContainerRef;
    private readonly formControlName;
    private readonly formControl;
    private readonly commonMessages;
    private readonly featureMessages;
    private errorInfoComponent;
    private control;
    private sub$;
    onBlur(): void;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, formControlName: FormControlName, formControl: NgControl, commonMessages: any, featureMessages: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
    validataStatus(status: string): void;
    getMessage(errors: ValidationErrors): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormControlErrorsDirective, [null, null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormControlErrorsDirective, "[formControlErrors]", never, {}, {}, never, never, false, never>;
}
