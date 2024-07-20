import { CommonModule } from '@angular/common';
import { NgModule, } from '@angular/core';
import { LoggerConfigKey, } from './interfaces';
import { LoggerService } from './logger.service';
import * as i0 from "@angular/core";
export class LoggerModule {
    static forRoot(config = { allowConsole: true }) {
        return {
            ngModule: LoggerModule,
            providers: [
                { provide: LoggerConfigKey, useValue: config },
                LoggerService,
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoggerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: LoggerModule, imports: [CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoggerModule, providers: [LoggerService], imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LoggerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule],
                    providers: [LoggerService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xvZ2dlci9zcmMvbGliL2xvZ2dlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUVMLGVBQWUsR0FDaEIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQU9qRCxNQUFNLE9BQU8sWUFBWTtJQUN2QixNQUFNLENBQUMsT0FBTyxDQUNaLFNBQXVCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTtRQUU3QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2dCQUM5QyxhQUFhO2FBQ2Q7U0FDRixDQUFDO0lBQ0osQ0FBQzsrR0FYVSxZQUFZO2dIQUFaLFlBQVksWUFIYixZQUFZO2dIQUdYLFlBQVksYUFGWixDQUFDLGFBQWEsQ0FBQyxZQURoQixZQUFZOzs0RkFHWCxZQUFZO2tCQUx4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBMb2dnZXJDb25maWcsXG4gIExvZ2dlckNvbmZpZ0tleSxcbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UgfSBmcm9tICcuL2xvZ2dlci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW0xvZ2dlclNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dnZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBjb25maWc6IExvZ2dlckNvbmZpZyA9IHsgYWxsb3dDb25zb2xlOiB0cnVlIH1cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxMb2dnZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IExvZ2dlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IExvZ2dlckNvbmZpZ0tleSwgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgICBMb2dnZXJTZXJ2aWNlLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=