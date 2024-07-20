import { CommonModule } from '@angular/common';
import { NgModule, } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TOAST_OPTIONS } from './options-token';
import { ToastService } from './toast.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class ToastModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdG9hc3Qvc3JjL2xpYi90b2FzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQU8vQyxNQUFNLE9BQU8sV0FBVztJQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWE7UUFDMUIsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzsrR0FYVSxXQUFXO2dIQUFYLFdBQVcsWUFIWixZQUFZO2dIQUdYLFdBQVcsYUFGWCxDQUFDLFlBQVksQ0FBQyxZQURmLFlBQVksRUFBRSxlQUFlLENBQUMsT0FBTyxFQUFFOzs0RkFHdEMsV0FBVztrQkFMdkIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDbEQsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5pbXBvcnQgeyBUT0FTVF9PUFRJT05TIH0gZnJvbSAnLi9vcHRpb25zLXRva2VuJztcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vdG9hc3Quc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KCldLFxuICBwcm92aWRlcnM6IFtUb2FzdFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRvYXN0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb2FzdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVE9BU1RfT1BUSU9OUyxcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19