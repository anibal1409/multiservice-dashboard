/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, HostListener, Inject, Optional, } from '@angular/core';
import { Subscription } from 'rxjs';
import { COMMON_MESSAGES } from './common-messajes-token';
import { FEATURE_MESSAGES } from './feature-messages-token';
import { FormControlErrorsComponent } from './form-control-errors.component';
import { parseError } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class FormControlErrorsDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLWVycm9ycy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mb3JtLWNvbnRyb2wtZXJyb3JzL3NyYy9saWIvZm9ybS1jb250cm9sLWVycm9ycy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFHTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLE1BQU0sRUFHTixRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFRdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7O0FBTXJDLE1BQU0sT0FBTywwQkFBMEI7SUFPckMsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQsWUFDbUIsd0JBQWtELEVBQ2xELGdCQUFrQyxFQUN0QixlQUFnQyxFQUNoQyxXQUFzQixFQUNHLGNBQW1CLEVBQ2xCLGVBQW9CO1FBTDFELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUN0QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQVc7UUFDRyxtQkFBYyxHQUFkLGNBQWMsQ0FBSztRQUNsQixvQkFBZSxHQUFmLGVBQWUsQ0FBSztRQWxCckUsdUJBQWtCLEdBQ3hC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LDBCQUEwQjtrQkFKdEMsU0FBUzttQkFBQztvQkFDVCw4REFBOEQ7b0JBQzlELFFBQVEsRUFBRSxxQkFBcUI7aUJBQ2hDOzswQkFpQkksUUFBUTs7MEJBQ1IsUUFBUTs7MEJBQ1IsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxlQUFlOzswQkFDbEMsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxnQkFBZ0I7NENBWnRDLE1BQU07c0JBREwsWUFBWTt1QkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgVmlld0NvbnRhaW5lclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wsXG4gIEZvcm1Db250cm9sTmFtZSxcbiAgTmdDb250cm9sLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDT01NT05fTUVTU0FHRVMgfSBmcm9tICcuL2NvbW1vbi1tZXNzYWplcy10b2tlbic7XG5pbXBvcnQgeyBGRUFUVVJFX01FU1NBR0VTIH0gZnJvbSAnLi9mZWF0dXJlLW1lc3NhZ2VzLXRva2VuJztcbmltcG9ydCB7IEZvcm1Db250cm9sRXJyb3JzQ29tcG9uZW50IH0gZnJvbSAnLi9mb3JtLWNvbnRyb2wtZXJyb3JzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBwYXJzZUVycm9yIH0gZnJvbSAnLi91dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L2RpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tmb3JtQ29udHJvbEVycm9yc10nLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbEVycm9yc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBlcnJvckluZm9Db21wb25lbnQ6IENvbXBvbmVudFJlZjxGb3JtQ29udHJvbEVycm9yc0NvbXBvbmVudD4gfCBudWxsID1cbiAgICBudWxsO1xuICBwcml2YXRlIGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHN1YiQgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIG9uQmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICB0aGlzLnZhbGlkYXRhU3RhdHVzKHRoaXMuY29udHJvbC5zdGF0dXMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgZm9ybUNvbnRyb2xOYW1lOiBGb3JtQ29udHJvbE5hbWUsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBmb3JtQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ09NTU9OX01FU1NBR0VTKSBwcml2YXRlIHJlYWRvbmx5IGNvbW1vbk1lc3NhZ2VzOiBhbnksXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChGRUFUVVJFX01FU1NBR0VTKSBwcml2YXRlIHJlYWRvbmx5IGZlYXR1cmVNZXNzYWdlczogYW55XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmZvcm1Db250cm9sTmFtZT8uY29udHJvbCB8fCB0aGlzLmZvcm1Db250cm9sPy5jb250cm9sO1xuXG4gICAgaWYgKCF0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ05vIGNvbnRyb2wgZm91bmQsIGB2cnQyRm9ybUNvbnRyb2xFcnJvcnNgIG11c3QgYmUgdXNlZCB3aXRoIGBmb3JtQ29udHJvbE5hbWVgIG9yIGBmb3JtQ29udHJvbGAnXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBGb3JtQ29udHJvbEVycm9yc0NvbXBvbmVudFxuICAgICk7XG4gICAgdGhpcy5lcnJvckluZm9Db21wb25lbnQgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuXG4gICAgdGhpcy5zdWIkLmFkZChcbiAgICAgIHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzPy5zdWJzY3JpYmUoKHN0YXR1cykgPT4ge1xuICAgICAgICB0aGlzLnZhbGlkYXRhU3RhdHVzKHN0YXR1cyk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSAoXG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50XG4gICAgKS5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgY29uc3QgZXJyb3JjID0gY29udGFpbmVyPy5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnZm9ybS1jb250cm9sLWVycm9ycydcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZXJyb3JjKSB7XG4gICAgICAgIGVycm9yYy5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIGVycm9yYy5zdHlsZS5sZWZ0ID0gYDAuMnJlbWA7XG4gICAgICAgIGVycm9yYy5zdHlsZS5mb250U2l6ZSA9ICcwLjhyZW0nO1xuICAgICAgICBlcnJvcmMuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YiQudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHZhbGlkYXRhU3RhdHVzKHN0YXR1czogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmVycm9ySW5mb0NvbXBvbmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlcnJvciBpbmZvIGNvbXBvbmVudCBmb3VuZCcpO1xuICAgIH1cbiAgICBpZiAoWydJTlZBTElEJywgJ0RJU0FCTEVEJ10uaW5jbHVkZXMoc3RhdHVzKSAmJiB0aGlzLmNvbnRyb2w/LnRvdWNoZWQpIHtcbiAgICAgIHRoaXMuZXJyb3JJbmZvQ29tcG9uZW50Lmluc3RhbmNlLm1lc3NhZ2UgPSB0aGlzLmdldE1lc3NhZ2UoXG4gICAgICAgIHRoaXMuY29udHJvbC5lcnJvcnMgYXMgVmFsaWRhdGlvbkVycm9yc1xuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ1ZBTElEJykge1xuICAgICAgdGhpcy5lcnJvckluZm9Db21wb25lbnQuaW5zdGFuY2UubWVzc2FnZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldE1lc3NhZ2UoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JzKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIGNvbnN0IHsgbWVzc2FnZSA9ICcnLCBhcmdzIH0gPSBwYXJzZUVycm9yKGVycm9ycyk7XG4gICAgY29uc3QgdHJhbnNsYXRlS2V5ID1cbiAgICAgICh0aGlzLmZlYXR1cmVNZXNzYWdlcyAmJiB0aGlzLmZlYXR1cmVNZXNzYWdlc1ttZXNzYWdlXSkgfHxcbiAgICAgICh0aGlzLmNvbW1vbk1lc3NhZ2VzICYmIHRoaXMuY29tbW9uTWVzc2FnZXNbbWVzc2FnZV0pIHx8XG4gICAgICBtZXNzYWdlO1xuICAgIHJldHVybiB0cmFuc2xhdGVLZXk7XG4gIH1cbn1cbiJdfQ==