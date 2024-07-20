import { NgModule } from '@angular/core';
import { COMMON_MESSAGES } from './common-messajes-token';
import { FEATURE_MESSAGES } from './feature-messages-token';
import { FormControlErrorsComponent } from './form-control-errors.component';
import { FormControlErrorsDirective } from './form-control-errors.directive';
import * as i0 from "@angular/core";
export class FormControlErrorsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLWVycm9ycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mb3JtLWNvbnRyb2wtZXJyb3JzL3NyYy9saWIvZm9ybS1jb250cm9sLWVycm9ycy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQVE3RSxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLE1BQU0sQ0FBQyxPQUFPLENBQ1osY0FBNkI7UUFFN0IsT0FBTztZQUNMLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixRQUFRLEVBQUUsY0FBYztpQkFDekI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FDYixlQUErQjtRQUUvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsUUFBUSxFQUFFLGVBQWU7aUJBQzFCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzsrR0EzQlUsdUJBQXVCO2dIQUF2Qix1QkFBdUIsaUJBSm5CLDBCQUEwQixFQUFFLDBCQUEwQixhQUUzRCwwQkFBMEIsRUFBRSwwQkFBMEI7Z0hBRXJELHVCQUF1Qjs7NEZBQXZCLHVCQUF1QjtrQkFMbkMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSwwQkFBMEIsQ0FBQztvQkFDdEUsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsMEJBQTBCLENBQUM7aUJBQ2xFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ09NTU9OX01FU1NBR0VTIH0gZnJvbSAnLi9jb21tb24tbWVzc2FqZXMtdG9rZW4nO1xuaW1wb3J0IHsgRkVBVFVSRV9NRVNTQUdFUyB9IGZyb20gJy4vZmVhdHVyZS1tZXNzYWdlcy10b2tlbic7XG5pbXBvcnQgeyBGb3JtQ29udHJvbEVycm9yc0NvbXBvbmVudCB9IGZyb20gJy4vZm9ybS1jb250cm9sLWVycm9ycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xFcnJvcnNEaXJlY3RpdmUgfSBmcm9tICcuL2Zvcm0tY29udHJvbC1lcnJvcnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEVycm9yTWVzc2FnZXMgfSBmcm9tICcuL21vZGVscyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Zvcm1Db250cm9sRXJyb3JzQ29tcG9uZW50LCBGb3JtQ29udHJvbEVycm9yc0RpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbRm9ybUNvbnRyb2xFcnJvcnNDb21wb25lbnQsIEZvcm1Db250cm9sRXJyb3JzRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xFcnJvcnNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBjb21tb25NZXNzYWdlczogRXJyb3JNZXNzYWdlc1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEZvcm1Db250cm9sRXJyb3JzTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBGb3JtQ29udHJvbEVycm9yc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ09NTU9OX01FU1NBR0VTLFxuICAgICAgICAgIHVzZVZhbHVlOiBjb21tb25NZXNzYWdlcyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZChcbiAgICBmZWF0dXJlTWVzc2FnZXM/OiBFcnJvck1lc3NhZ2VzXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Rm9ybUNvbnRyb2xFcnJvcnNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZvcm1Db250cm9sRXJyb3JzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBGRUFUVVJFX01FU1NBR0VTLFxuICAgICAgICAgIHVzZVZhbHVlOiBmZWF0dXJlTWVzc2FnZXMsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==