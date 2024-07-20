import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCustomerDto } from '../model/create-customer-dto';
import { CustomerRespondeDto } from '../model/customer-responde-dto';
import { UpdateCustomerDto } from '../model/update-customer-dto';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
export declare class CustomersService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * @param createCustomerDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    customersControllerCreate(createCustomerDto: CreateCustomerDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<CustomerRespondeDto>;
    customersControllerCreate(createCustomerDto: CreateCustomerDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<CustomerRespondeDto>>;
    customersControllerCreate(createCustomerDto: CreateCustomerDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<CustomerRespondeDto>>;
    /**
     * @param id
     * @param status
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    customersControllerFindAll(id?: number, status?: boolean, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<Array<CustomerRespondeDto>>;
    customersControllerFindAll(id?: number, status?: boolean, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<Array<CustomerRespondeDto>>>;
    customersControllerFindAll(id?: number, status?: boolean, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<Array<CustomerRespondeDto>>>;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    customersControllerFindOne(id: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<CustomerRespondeDto>;
    customersControllerFindOne(id: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<CustomerRespondeDto>>;
    customersControllerFindOne(id: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<CustomerRespondeDto>>;
    /**
     * @param document
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    customersControllerFindOneByDocument(document: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<CustomerRespondeDto>;
    customersControllerFindOneByDocument(document: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<CustomerRespondeDto>>;
    customersControllerFindOneByDocument(document: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<CustomerRespondeDto>>;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    customersControllerRemove(id: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<CustomerRespondeDto>;
    customersControllerRemove(id: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<CustomerRespondeDto>>;
    customersControllerRemove(id: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<CustomerRespondeDto>>;
    /**
     * @param id
     * @param updateCustomerDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    customersControllerUpdate(id: string, updateCustomerDto: UpdateCustomerDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<CustomerRespondeDto>;
    customersControllerUpdate(id: string, updateCustomerDto: UpdateCustomerDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<CustomerRespondeDto>>;
    customersControllerUpdate(id: string, updateCustomerDto: UpdateCustomerDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<CustomerRespondeDto>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomersService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomersService>;
}
