import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateServiceDto } from '../model/create-service-dto';
import { ServiceRespondeDto } from '../model/service-responde-dto';
import { UpdateServiceDto } from '../model/update-service-dto';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
export declare class ServicesService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * @param createServiceDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    servicesControllerCreate(createServiceDto: CreateServiceDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ServiceRespondeDto>;
    servicesControllerCreate(createServiceDto: CreateServiceDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ServiceRespondeDto>>;
    servicesControllerCreate(createServiceDto: CreateServiceDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ServiceRespondeDto>>;
    /**
     * @param id
     * @param status
     * @param name
     * @param price
     * @param moreOrequal
     * @param lessOrEqual
     * @param categoryId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    servicesControllerFindAll(id?: number, status?: boolean, name?: string, price?: number, moreOrequal?: number, lessOrEqual?: number, categoryId?: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<Array<ServiceRespondeDto>>;
    servicesControllerFindAll(id?: number, status?: boolean, name?: string, price?: number, moreOrequal?: number, lessOrEqual?: number, categoryId?: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<Array<ServiceRespondeDto>>>;
    servicesControllerFindAll(id?: number, status?: boolean, name?: string, price?: number, moreOrequal?: number, lessOrEqual?: number, categoryId?: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<Array<ServiceRespondeDto>>>;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    servicesControllerFindOne(id: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ServiceRespondeDto>;
    servicesControllerFindOne(id: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ServiceRespondeDto>>;
    servicesControllerFindOne(id: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ServiceRespondeDto>>;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    servicesControllerRemove(id: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ServiceRespondeDto>;
    servicesControllerRemove(id: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ServiceRespondeDto>>;
    servicesControllerRemove(id: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ServiceRespondeDto>>;
    /**
     * @param id
     * @param updateServiceDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    servicesControllerUpdate(id: string, updateServiceDto: UpdateServiceDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ServiceRespondeDto>;
    servicesControllerUpdate(id: string, updateServiceDto: UpdateServiceDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ServiceRespondeDto>>;
    servicesControllerUpdate(id: string, updateServiceDto: UpdateServiceDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ServiceRespondeDto>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ServicesService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ServicesService>;
}
