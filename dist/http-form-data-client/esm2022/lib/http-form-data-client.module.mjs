import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, } from '@angular/core';
import { HttpFormDataClientService } from './http-form-data-client.service';
import { HTTP_FORM_DATA_OPTIONS, } from './interfaces';
import * as i0 from "@angular/core";
export class HttpFormDataClientModule {
    static forRoot(options = {
        basePath: 'http://localhost:3333/api',
    }) {
        return {
            ngModule: HttpFormDataClientModule,
            providers: [
                HttpFormDataClientService,
                {
                    provide: HTTP_FORM_DATA_OPTIONS,
                    useValue: options,
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpFormDataClientModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: HttpFormDataClientModule, imports: [CommonModule, HttpClientModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpFormDataClientModule, imports: [CommonModule, HttpClientModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpFormDataClientModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, HttpClientModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1mb3JtLWRhdGEtY2xpZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2h0dHAtZm9ybS1kYXRhLWNsaWVudC9zcmMvbGliL2h0dHAtZm9ybS1kYXRhLWNsaWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFFTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDNUUsT0FBTyxFQUVMLHNCQUFzQixHQUN2QixNQUFNLGNBQWMsQ0FBQzs7QUFLdEIsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxNQUFNLENBQUMsT0FBTyxDQUNaLFVBQXlCO1FBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7S0FDdEM7UUFFRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxTQUFTLEVBQUU7Z0JBQ1QseUJBQXlCO2dCQUN6QjtvQkFDRSxPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixRQUFRLEVBQUUsT0FBTztpQkFDbEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOytHQWhCVSx3QkFBd0I7Z0hBQXhCLHdCQUF3QixZQUZ6QixZQUFZLEVBQUUsZ0JBQWdCO2dIQUU3Qix3QkFBd0IsWUFGekIsWUFBWSxFQUFFLGdCQUFnQjs7NEZBRTdCLHdCQUF3QjtrQkFIcEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7aUJBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEh0dHBGb3JtRGF0YUNsaWVudFNlcnZpY2UgfSBmcm9tICcuL2h0dHAtZm9ybS1kYXRhLWNsaWVudC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENsaWVudE9wdGlvbnMsXG4gIEhUVFBfRk9STV9EQVRBX09QVElPTlMsXG59IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBIdHRwRm9ybURhdGFDbGllbnRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBvcHRpb25zOiBDbGllbnRPcHRpb25zID0ge1xuICAgICAgYmFzZVBhdGg6ICdodHRwOi8vbG9jYWxob3N0OjMzMzMvYXBpJyxcbiAgICB9LFxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEh0dHBGb3JtRGF0YUNsaWVudE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSHR0cEZvcm1EYXRhQ2xpZW50TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEh0dHBGb3JtRGF0YUNsaWVudFNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBIVFRQX0ZPUk1fREFUQV9PUFRJT05TLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=