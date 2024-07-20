import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryRespondeDto } from '../model/category-responde-dto';
import { CreateCategoryDto } from '../model/create-category-dto';
import { UpdateCategoryDto } from '../model/update-category-dto';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
export declare class CategoriesService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * @param createCategoryDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    categoriesControllerCreate(createCategoryDto: CreateCategoryDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<CategoryRespondeDto>;
    categoriesControllerCreate(createCategoryDto: CreateCategoryDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<CategoryRespondeDto>>;
    categoriesControllerCreate(createCategoryDto: CreateCategoryDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<CategoryRespondeDto>>;
    /**
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    categoriesControllerFindAll(observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<Array<CategoryRespondeDto>>;
    categoriesControllerFindAll(observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<Array<CategoryRespondeDto>>>;
    categoriesControllerFindAll(observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<Array<CategoryRespondeDto>>>;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    categoriesControllerFindOne(id: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<CategoryRespondeDto>;
    categoriesControllerFindOne(id: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<CategoryRespondeDto>>;
    categoriesControllerFindOne(id: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<CategoryRespondeDto>>;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    categoriesControllerRemove(id: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<CategoryRespondeDto>;
    categoriesControllerRemove(id: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<CategoryRespondeDto>>;
    categoriesControllerRemove(id: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<CategoryRespondeDto>>;
    /**
     * @param id
     * @param updateCategoryDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    categoriesControllerUpdate(id: number, updateCategoryDto: UpdateCategoryDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<CategoryRespondeDto>;
    categoriesControllerUpdate(id: number, updateCategoryDto: UpdateCategoryDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<CategoryRespondeDto>>;
    categoriesControllerUpdate(id: number, updateCategoryDto: UpdateCategoryDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<CategoryRespondeDto>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CategoriesService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CategoriesService>;
}
