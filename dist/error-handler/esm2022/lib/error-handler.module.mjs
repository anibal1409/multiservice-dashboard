import { CommonModule } from '@angular/common';
import { forwardRef, NgModule, } from '@angular/core';
import { LoggerConfigKey, LoggerModule, } from 'logger';
import { AlertServiceService } from './alert-service';
import { AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, } from './consts';
import { ErrorHandlerService } from './error-handler.service';
import { ErrorParserService } from './error-parser';
import * as i0 from "@angular/core";
/**
 * Módulo manejador de errores
 */
export class ErrorHandlerModule {
    static forRoot(config) {
        return {
            ngModule: ErrorHandlerModule,
            providers: [
                {
                    provide: ErrorHandlerConfigKey,
                    useValue: config,
                },
                {
                    provide: AlertServiceKey,
                    useExisting: forwardRef(() => config?.alertService) || AlertServiceService,
                },
                {
                    provide: AlertMethotKey,
                    useValue: config?.alertMethodName,
                },
                {
                    provide: LoggerConfigKey,
                    useValue: config?.loggerConfig || {
                        allowConsole: true,
                    },
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerModule, imports: [CommonModule, LoggerModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerModule, providers: [ErrorHandlerService, ErrorParserService, AlertServiceService], imports: [CommonModule, LoggerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, LoggerModule],
                    providers: [ErrorHandlerService, ErrorParserService, AlertServiceService],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lcnJvci1oYW5kbGVyL3NyYy9saWIvZXJyb3ItaGFuZGxlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxVQUFVLEVBRVYsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxlQUFlLEVBQ2YsWUFBWSxHQUNiLE1BQU0sUUFBUSxDQUFDO0FBRWhCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFDTCxjQUFjLEVBQ2QsZUFBZSxFQUNmLHFCQUFxQixHQUN0QixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHcEQ7O0dBRUc7QUFNSCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQ1osTUFBOEI7UUFFOUIsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxxQkFBcUI7b0JBQzlCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsV0FBVyxFQUNULFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLElBQUksbUJBQW1CO2lCQUNoRTtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlO2lCQUNsQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLElBQUk7d0JBQ2hDLFlBQVksRUFBRSxJQUFJO3FCQUNuQjtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7K0dBNUJVLGtCQUFrQjtnSEFBbEIsa0JBQWtCLFlBSG5CLFlBQVksRUFBRSxZQUFZO2dIQUd6QixrQkFBa0IsYUFGbEIsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxZQUQvRCxZQUFZLEVBQUUsWUFBWTs7NEZBR3pCLGtCQUFrQjtrQkFMOUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztvQkFDckMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUM7aUJBQzFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgTG9nZ2VyQ29uZmlnS2V5LFxuICBMb2dnZXJNb2R1bGUsXG59IGZyb20gJ2xvZ2dlcic7XG5cbmltcG9ydCB7IEFsZXJ0U2VydmljZVNlcnZpY2UgfSBmcm9tICcuL2FsZXJ0LXNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQWxlcnRNZXRob3RLZXksXG4gIEFsZXJ0U2VydmljZUtleSxcbiAgRXJyb3JIYW5kbGVyQ29uZmlnS2V5LFxufSBmcm9tICcuL2NvbnN0cyc7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi9lcnJvci1oYW5kbGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXJyb3JQYXJzZXJTZXJ2aWNlIH0gZnJvbSAnLi9lcnJvci1wYXJzZXInO1xuaW1wb3J0IHsgRXJyb3JIYW5kbGVyQ29uZmlnIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBNw7NkdWxvIG1hbmVqYWRvciBkZSBlcnJvcmVzXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIExvZ2dlck1vZHVsZV0sXG4gIHByb3ZpZGVyczogW0Vycm9ySGFuZGxlclNlcnZpY2UsIEVycm9yUGFyc2VyU2VydmljZSwgQWxlcnRTZXJ2aWNlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290PFQ+KFxuICAgIGNvbmZpZz86IEVycm9ySGFuZGxlckNvbmZpZzxUPlxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEVycm9ySGFuZGxlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRXJyb3JIYW5kbGVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBFcnJvckhhbmRsZXJDb25maWdLZXksXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFsZXJ0U2VydmljZUtleSxcbiAgICAgICAgICB1c2VFeGlzdGluZzpcbiAgICAgICAgICAgIGZvcndhcmRSZWYoKCkgPT4gY29uZmlnPy5hbGVydFNlcnZpY2UpIHx8IEFsZXJ0U2VydmljZVNlcnZpY2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBbGVydE1ldGhvdEtleSxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnPy5hbGVydE1ldGhvZE5hbWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBMb2dnZXJDb25maWdLZXksXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZz8ubG9nZ2VyQ29uZmlnIHx8IHtcbiAgICAgICAgICAgIGFsbG93Q29uc29sZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=