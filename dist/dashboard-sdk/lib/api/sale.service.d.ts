import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateSaleDto } from '../model/create-sale-dto';
import { ReportsResponseDto } from '../model/reports-response-dto';
import { SaleRespondeDto } from '../model/sale-responde-dto';
import { UpdateSaleDto } from '../model/update-sale-dto';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
export declare class SaleService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * @param createSaleDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    salesControllerCreate(createSaleDto: CreateSaleDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<SaleRespondeDto>;
    salesControllerCreate(createSaleDto: CreateSaleDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<SaleRespondeDto>>;
    salesControllerCreate(createSaleDto: CreateSaleDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<SaleRespondeDto>>;
    /**
     * @param id
     * @param status
     * @param customerName
     * @param stage
     * @param date
     * @param categoryId
     * @param customerId
     * @param start
     * @param end
     * @param order
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    salesControllerFindAll(id?: number, status?: boolean, customerName?: string, stage?: string, date?: string, categoryId?: number, customerId?: number, start?: string, end?: string, order?: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<Array<SaleRespondeDto>>;
    salesControllerFindAll(id?: number, status?: boolean, customerName?: string, stage?: string, date?: string, categoryId?: number, customerId?: number, start?: string, end?: string, order?: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<Array<SaleRespondeDto>>>;
    salesControllerFindAll(id?: number, status?: boolean, customerName?: string, stage?: string, date?: string, categoryId?: number, customerId?: number, start?: string, end?: string, order?: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<Array<SaleRespondeDto>>>;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    salesControllerFindOne(id: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<SaleRespondeDto>;
    salesControllerFindOne(id: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<SaleRespondeDto>>;
    salesControllerFindOne(id: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<SaleRespondeDto>>;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    salesControllerGeneratePdf(id: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ReportsResponseDto>;
    salesControllerGeneratePdf(id: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ReportsResponseDto>>;
    salesControllerGeneratePdf(id: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ReportsResponseDto>>;
    /**
     * @param id
     * @param status
     * @param customerName
     * @param stage
     * @param date
     * @param categoryId
     * @param customerId
     * @param start
     * @param end
     * @param order
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    salesControllerGenerateReport(id?: number, status?: boolean, customerName?: string, stage?: string, date?: string, categoryId?: number, customerId?: number, start?: string, end?: string, order?: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ReportsResponseDto>;
    salesControllerGenerateReport(id?: number, status?: boolean, customerName?: string, stage?: string, date?: string, categoryId?: number, customerId?: number, start?: string, end?: string, order?: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ReportsResponseDto>>;
    salesControllerGenerateReport(id?: number, status?: boolean, customerName?: string, stage?: string, date?: string, categoryId?: number, customerId?: number, start?: string, end?: string, order?: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ReportsResponseDto>>;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    salesControllerRemove(id: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<SaleRespondeDto>;
    salesControllerRemove(id: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<SaleRespondeDto>>;
    salesControllerRemove(id: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<SaleRespondeDto>>;
    /**
     * @param id
     * @param updateSaleDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    salesControllerUpdate(id: string, updateSaleDto: UpdateSaleDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<SaleRespondeDto>;
    salesControllerUpdate(id: string, updateSaleDto: UpdateSaleDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<SaleRespondeDto>>;
    salesControllerUpdate(id: string, updateSaleDto: UpdateSaleDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<SaleRespondeDto>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaleService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SaleService>;
}
