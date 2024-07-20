import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientOptions, HttpOptions } from './interfaces';
import * as i0 from "@angular/core";
export declare class HttpFormDataClientService {
    private httpClient;
    private clientOptions;
    private httpOptions;
    private formDataParserOptions;
    constructor(httpClient: HttpClient, clientOptions?: ClientOptions);
    private buildUrl;
    post<T, R>(url: string, obj: T, httpOptions?: HttpOptions): Observable<R>;
    put<T, R>(url: string, obj: T, httpOptions?: HttpOptions): Observable<R>;
    patch<T, R>(url: string, obj: T, httpOptions?: HttpOptions): Observable<R>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpFormDataClientService, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpFormDataClientService>;
}
