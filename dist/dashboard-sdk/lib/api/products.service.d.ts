import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateProductDto } from '../model/create-product-dto';
import { ProductRespondeDto } from '../model/product-responde-dto';
import { UpdateProductDto } from '../model/update-product-dto';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
export declare class ProductsService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * @param createProductDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    productsControllerCreate(createProductDto: CreateProductDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ProductRespondeDto>;
    productsControllerCreate(createProductDto: CreateProductDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ProductRespondeDto>>;
    productsControllerCreate(createProductDto: CreateProductDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ProductRespondeDto>>;
    /**
     * @param id
     * @param status
     * @param name
     * @param price
     * @param stock
     * @param moreOrequal
     * @param lessOrEqual
     * @param categoryId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    productsControllerFindAll(id?: number, status?: boolean, name?: string, price?: number, stock?: number, moreOrequal?: number, lessOrEqual?: number, categoryId?: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<Array<ProductRespondeDto>>;
    productsControllerFindAll(id?: number, status?: boolean, name?: string, price?: number, stock?: number, moreOrequal?: number, lessOrEqual?: number, categoryId?: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<Array<ProductRespondeDto>>>;
    productsControllerFindAll(id?: number, status?: boolean, name?: string, price?: number, stock?: number, moreOrequal?: number, lessOrEqual?: number, categoryId?: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<Array<ProductRespondeDto>>>;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    productsControllerFindOne(id: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ProductRespondeDto>;
    productsControllerFindOne(id: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ProductRespondeDto>>;
    productsControllerFindOne(id: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ProductRespondeDto>>;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    productsControllerRemove(id: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ProductRespondeDto>;
    productsControllerRemove(id: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ProductRespondeDto>>;
    productsControllerRemove(id: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ProductRespondeDto>>;
    /**
     * @param id
     * @param updateProductDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    productsControllerUpdate(id: string, updateProductDto: UpdateProductDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ProductRespondeDto>;
    productsControllerUpdate(id: string, updateProductDto: UpdateProductDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ProductRespondeDto>>;
    productsControllerUpdate(id: string, updateProductDto: UpdateProductDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ProductRespondeDto>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProductsService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProductsService>;
}
