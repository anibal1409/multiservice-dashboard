import { Inject, Injectable, Optional, } from '@angular/core';
import { HTTP_FORM_DATA_OPTIONS, } from './interfaces';
import { json2FormData } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class HttpFormDataClientService {
    constructor(httpClient, clientOptions = {}) {
        this.httpClient = httpClient;
        this.clientOptions = clientOptions;
        this.httpOptions = {};
        this.formDataParserOptions = {
            blobPrefix: 'file',
        };
        this.httpOptions = clientOptions?.httpOptions || {};
        this.formDataParserOptions =
            clientOptions?.formDataParserOptions || this.formDataParserOptions;
    }
    buildUrl(url) {
        return `${this.clientOptions.basePath}/${url}`;
    }
    post(url, obj, httpOptions = {}) {
        return this.httpClient.post(this.buildUrl(url), json2FormData(obj, this.formDataParserOptions), {
            ...this.httpOptions,
            ...httpOptions,
        });
    }
    put(url, obj, httpOptions = {}) {
        return this.httpClient.put(this.buildUrl(url), json2FormData(obj, this.formDataParserOptions), {
            ...this.httpOptions,
            ...httpOptions,
        });
    }
    patch(url, obj, httpOptions = {}) {
        return this.httpClient.patch(this.buildUrl(url), json2FormData(obj, this.formDataParserOptions), {
            ...this.httpOptions,
            ...httpOptions,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpFormDataClientService, deps: [{ token: i1.HttpClient }, { token: HTTP_FORM_DATA_OPTIONS, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpFormDataClientService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HttpFormDataClientService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [HTTP_FORM_DATA_OPTIONS]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1mb3JtLWRhdGEtY2xpZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9odHRwLWZvcm0tZGF0YS1jbGllbnQvc3JjL2xpYi9odHRwLWZvcm0tZGF0YS1jbGllbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUdMLHNCQUFzQixHQUV2QixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7QUFHeEMsTUFBTSxPQUFPLHlCQUF5QjtJQU1wQyxZQUNVLFVBQXNCLEVBR3RCLGdCQUErQixFQUFFO1FBSGpDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFHdEIsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBVG5DLGdCQUFXLEdBQWdCLEVBQUUsQ0FBQztRQUM5QiwwQkFBcUIsR0FBMEI7WUFDckQsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQVFBLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxFQUFFLFdBQVcsSUFBSSxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLHFCQUFxQjtZQUN4QixhQUFhLEVBQUUscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3ZFLENBQUM7SUFFTyxRQUFRLENBQUMsR0FBVztRQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELElBQUksQ0FDRixHQUFXLEVBQ1gsR0FBTSxFQUNOLGNBQTJCLEVBQUU7UUFFN0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFDbEIsYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFDOUM7WUFDRSxHQUFHLElBQUksQ0FBQyxXQUFXO1lBQ25CLEdBQUcsV0FBVztTQUNmLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxHQUFHLENBQU8sR0FBVyxFQUFFLEdBQU0sRUFBRSxjQUEyQixFQUFFO1FBQzFELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQ2xCLGFBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQzlDO1lBQ0UsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNuQixHQUFHLFdBQVc7U0FDZixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUNILEdBQVcsRUFDWCxHQUFNLEVBQ04sY0FBMkIsRUFBRTtRQUU3QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUNsQixhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUM5QztZQUNFLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDbkIsR0FBRyxXQUFXO1NBQ2YsQ0FDRixDQUFDO0lBQ0osQ0FBQzsrR0E1RFUseUJBQXlCLDRDQVMxQixzQkFBc0I7bUhBVHJCLHlCQUF5Qjs7NEZBQXpCLHlCQUF5QjtrQkFEckMsVUFBVTs7MEJBU04sUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgQ2xpZW50T3B0aW9ucyxcbiAgRm9ybURhdGFQYXJzZXJPcHRpb25zLFxuICBIVFRQX0ZPUk1fREFUQV9PUFRJT05TLFxuICBIdHRwT3B0aW9ucyxcbn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGpzb24yRm9ybURhdGEgfSBmcm9tICcuL3V0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBGb3JtRGF0YUNsaWVudFNlcnZpY2Uge1xuICBwcml2YXRlIGh0dHBPcHRpb25zOiBIdHRwT3B0aW9ucyA9IHt9O1xuICBwcml2YXRlIGZvcm1EYXRhUGFyc2VyT3B0aW9uczogRm9ybURhdGFQYXJzZXJPcHRpb25zID0ge1xuICAgIGJsb2JQcmVmaXg6ICdmaWxlJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEhUVFBfRk9STV9EQVRBX09QVElPTlMpXG4gICAgcHJpdmF0ZSBjbGllbnRPcHRpb25zOiBDbGllbnRPcHRpb25zID0ge30sXG4gICkge1xuICAgIHRoaXMuaHR0cE9wdGlvbnMgPSBjbGllbnRPcHRpb25zPy5odHRwT3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLmZvcm1EYXRhUGFyc2VyT3B0aW9ucyA9XG4gICAgICBjbGllbnRPcHRpb25zPy5mb3JtRGF0YVBhcnNlck9wdGlvbnMgfHwgdGhpcy5mb3JtRGF0YVBhcnNlck9wdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jbGllbnRPcHRpb25zLmJhc2VQYXRofS8ke3VybH1gO1xuICB9XG5cbiAgcG9zdDxULCBSPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBvYmo6IFQsXG4gICAgaHR0cE9wdGlvbnM6IEh0dHBPcHRpb25zID0ge30sXG4gICk6IE9ic2VydmFibGU8Uj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxSPihcbiAgICAgIHRoaXMuYnVpbGRVcmwodXJsKSxcbiAgICAgIGpzb24yRm9ybURhdGEob2JqLCB0aGlzLmZvcm1EYXRhUGFyc2VyT3B0aW9ucyksXG4gICAgICB7XG4gICAgICAgIC4uLnRoaXMuaHR0cE9wdGlvbnMsXG4gICAgICAgIC4uLmh0dHBPcHRpb25zLFxuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgcHV0PFQsIFI+KHVybDogc3RyaW5nLCBvYmo6IFQsIGh0dHBPcHRpb25zOiBIdHRwT3B0aW9ucyA9IHt9KTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wdXQ8Uj4oXG4gICAgICB0aGlzLmJ1aWxkVXJsKHVybCksXG4gICAgICBqc29uMkZvcm1EYXRhKG9iaiwgdGhpcy5mb3JtRGF0YVBhcnNlck9wdGlvbnMpLFxuICAgICAge1xuICAgICAgICAuLi50aGlzLmh0dHBPcHRpb25zLFxuICAgICAgICAuLi5odHRwT3B0aW9ucyxcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHBhdGNoPFQsIFI+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9iajogVCxcbiAgICBodHRwT3B0aW9uczogSHR0cE9wdGlvbnMgPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxSPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wYXRjaDxSPihcbiAgICAgIHRoaXMuYnVpbGRVcmwodXJsKSxcbiAgICAgIGpzb24yRm9ybURhdGEob2JqLCB0aGlzLmZvcm1EYXRhUGFyc2VyT3B0aW9ucyksXG4gICAgICB7XG4gICAgICAgIC4uLnRoaXMuaHR0cE9wdGlvbnMsXG4gICAgICAgIC4uLmh0dHBPcHRpb25zLFxuICAgICAgfSxcbiAgICApO1xuICB9XG59XG4iXX0=