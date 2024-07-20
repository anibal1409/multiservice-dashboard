import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Optional, Inject, NgModule } from '@angular/core';

class BlobVM {
    constructor(blob, filename) {
        this.blob = blob;
        this.filename = filename;
    }
}

const HTTP_FORM_DATA_OPTIONS = new InjectionToken('HTTP_FORM_DATA_OPTIONS');

/**
 * Convierte un objeto en FormData
 * @param obj Objeto Json
 * @returns Objeto FormData con las propiedades del objeto JSON
 */
function json2FormData(obj, options = { blobPrefix: 'file' }) {
    const formData = new FormData();
    Object.keys(obj).forEach((k) => {
        const value = obj[k];
        const blobKey = options.blobPrefix ? `${options.blobPrefix}_${k}` : k;
        if (value instanceof Blob) {
            formData.append(blobKey, value);
        }
        else if (value instanceof BlobVM) {
            formData.append(blobKey, value.blob, value.filename);
        }
        else if (Array.isArray(value) && value.length) {
            value.forEach((val) => {
                if (val instanceof Blob) {
                    formData.append(blobKey, val);
                }
                else {
                    formData.append(`${k}[]`, JSON.stringify(val));
                }
            });
        }
        else if (typeof value === 'string') {
            formData.append(k, value);
        }
        else {
            formData.append(k, JSON.stringify(value));
        }
    });
    return formData;
}

class HttpFormDataClientService {
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

class HttpFormDataClientModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { BlobVM, HTTP_FORM_DATA_OPTIONS, HttpFormDataClientModule, HttpFormDataClientService, json2FormData };
//# sourceMappingURL=http-form-data-client.mjs.map
