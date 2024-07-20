import { Inject, Injectable, Optional, } from '@angular/core';
import { LoggerConfigKey, } from 'logger';
import { AlertMethotKey, AlertServiceKey, ErrorHandlerConfigKey, } from './consts';
import { ErrorSource, } from './error-parser';
import * as i0 from "@angular/core";
import * as i1 from "./error-parser";
import * as i2 from "logger";
export class ErrorHandlerService {
    constructor(errorParserService, loggerService, configOptions, alertSevice, alertMethodName = 'error', loggerConfig) {
        this.errorParserService = errorParserService;
        this.loggerService = loggerService;
        this.configOptions = configOptions;
        this.alertSevice = alertSevice;
        this.alertMethodName = alertMethodName;
        this.loggerConfig = loggerConfig;
        this.config = {
            alertClientErrors: false,
        };
        this.config = Object.assign(this.config, configOptions);
    }
    handleError(error) {
        const parsedError = this.errorParserService.getErrorAndSource(error);
        const message = this.errorParserService.getMessage(error);
        if (parsedError.source === ErrorSource.Server ||
            (this.config.alertClientErrors &&
                parsedError.source === ErrorSource.Client && parsedError?.error?.code !== -100)) {
            this.alertSevice[this.alertMethodName](message);
        }
        this.loggerService.reportError(parsedError, this.loggerConfig);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerService, deps: [{ token: i1.ErrorParserService }, { token: i2.LoggerService }, { token: ErrorHandlerConfigKey, optional: true }, { token: AlertServiceKey, optional: true }, { token: AlertMethotKey, optional: true }, { token: LoggerConfigKey, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorHandlerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ErrorParserService }, { type: i2.LoggerService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ErrorHandlerConfigKey]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [AlertServiceKey]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [AlertMethotKey]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [LoggerConfigKey]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXJyb3ItaGFuZGxlci9zcmMvbGliL2Vycm9yLWhhbmRsZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBRUwsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUVMLGVBQWUsR0FFaEIsTUFBTSxRQUFRLENBQUM7QUFFaEIsT0FBTyxFQUNMLGNBQWMsRUFDZCxlQUFlLEVBQ2YscUJBQXFCLEdBQ3RCLE1BQU0sVUFBVSxDQUFDO0FBQ2xCLE9BQU8sRUFFTCxXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUl4QixNQUFNLE9BQU8sbUJBQW1CO0lBSzlCLFlBQ1Usa0JBQXNDLEVBQ3RDLGFBQTRCLEVBRzVCLGFBQWlDLEVBQ0ksV0FBZ0IsRUFHckQsa0JBQTBCLE9BQU8sRUFHakMsWUFBMEI7UUFYMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUc1QixrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFDSSxnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQUdyRCxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFHakMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFoQjVCLFdBQU0sR0FBdUI7WUFDbkMsaUJBQWlCLEVBQUUsS0FBSztTQUN6QixDQUFDO1FBZ0JBLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxXQUFXLENBQUMsS0FBZ0M7UUFDMUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsSUFDRSxXQUFXLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQyxNQUFNO1lBQ3pDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7Z0JBQzVCLFdBQVcsQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDLE1BQU0sSUFBSSxXQUFXLEVBQUUsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUNqRjtZQUNBLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBa0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQzsrR0FqQ1UsbUJBQW1CLGlGQVNwQixxQkFBcUIsNkJBRVQsZUFBZSw2QkFFM0IsY0FBYyw2QkFHZCxlQUFlO21IQWhCZCxtQkFBbUI7OzRGQUFuQixtQkFBbUI7a0JBRC9CLFVBQVU7OzBCQVNOLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMscUJBQXFCOzswQkFFNUIsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxlQUFlOzswQkFDbEMsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxjQUFjOzswQkFFckIsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1xuICBFcnJvckhhbmRsZXIsXG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBMb2dnZXJDb25maWcsXG4gIExvZ2dlckNvbmZpZ0tleSxcbiAgTG9nZ2VyU2VydmljZSxcbn0gZnJvbSAnbG9nZ2VyJztcblxuaW1wb3J0IHtcbiAgQWxlcnRNZXRob3RLZXksXG4gIEFsZXJ0U2VydmljZUtleSxcbiAgRXJyb3JIYW5kbGVyQ29uZmlnS2V5LFxufSBmcm9tICcuL2NvbnN0cyc7XG5pbXBvcnQge1xuICBFcnJvclBhcnNlclNlcnZpY2UsXG4gIEVycm9yU291cmNlLFxufSBmcm9tICcuL2Vycm9yLXBhcnNlcic7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXJDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVyU2VydmljZSBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XG4gIHByaXZhdGUgY29uZmlnOiBFcnJvckhhbmRsZXJDb25maWcgPSB7XG4gICAgYWxlcnRDbGllbnRFcnJvcnM6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZXJyb3JQYXJzZXJTZXJ2aWNlOiBFcnJvclBhcnNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXJTZXJ2aWNlOiBMb2dnZXJTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChFcnJvckhhbmRsZXJDb25maWdLZXkpXG4gICAgcHJpdmF0ZSBjb25maWdPcHRpb25zOiBFcnJvckhhbmRsZXJDb25maWcsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBbGVydFNlcnZpY2VLZXkpIHByaXZhdGUgYWxlcnRTZXZpY2U6IGFueSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQWxlcnRNZXRob3RLZXkpXG4gICAgcHJpdmF0ZSBhbGVydE1ldGhvZE5hbWU6IHN0cmluZyA9ICdlcnJvcicsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KExvZ2dlckNvbmZpZ0tleSlcbiAgICBwcml2YXRlIGxvZ2dlckNvbmZpZzogTG9nZ2VyQ29uZmlnXG4gICkge1xuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnT3B0aW9ucyk7XG4gIH1cblxuICBoYW5kbGVFcnJvcihlcnJvcjogRXJyb3IgfCBIdHRwRXJyb3JSZXNwb25zZSk6IHZvaWQge1xuICAgIGNvbnN0IHBhcnNlZEVycm9yID0gdGhpcy5lcnJvclBhcnNlclNlcnZpY2UuZ2V0RXJyb3JBbmRTb3VyY2UoZXJyb3IpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmVycm9yUGFyc2VyU2VydmljZS5nZXRNZXNzYWdlKGVycm9yKTtcbiAgICBpZiAoXG4gICAgICBwYXJzZWRFcnJvci5zb3VyY2UgPT09IEVycm9yU291cmNlLlNlcnZlciB8fFxuICAgICAgKHRoaXMuY29uZmlnLmFsZXJ0Q2xpZW50RXJyb3JzICYmXG4gICAgICAgIHBhcnNlZEVycm9yLnNvdXJjZSA9PT0gRXJyb3JTb3VyY2UuQ2xpZW50ICYmIHBhcnNlZEVycm9yPy5lcnJvcj8uY29kZSAhPT0gLTEwMClcbiAgICApIHtcbiAgICAgIHRoaXMuYWxlcnRTZXZpY2VbdGhpcy5hbGVydE1ldGhvZE5hbWVdKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0aGlzLmxvZ2dlclNlcnZpY2UucmVwb3J0RXJyb3IocGFyc2VkRXJyb3IgYXMgYW55LCB0aGlzLmxvZ2dlckNvbmZpZyk7XG4gIH1cbn1cbiJdfQ==