import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangePasswordDto } from '../model/change-password-dto';
import { ChangePasswordResponseDto } from '../model/change-password-response-dto';
import { CreateUserDto } from '../model/create-user-dto';
import { LoginDto } from '../model/login-dto';
import { LoginUserResponseDto } from '../model/login-user-response-dto';
import { RecoveryPasswordDto } from '../model/recovery-password-dto';
import { RecoveryPasswordResponseDto } from '../model/recovery-password-response-dto';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
export declare class AuthService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * @param changePasswordDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    authControllerChangePassword(changePasswordDto: ChangePasswordDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<ChangePasswordResponseDto>;
    authControllerChangePassword(changePasswordDto: ChangePasswordDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<ChangePasswordResponseDto>>;
    authControllerChangePassword(changePasswordDto: ChangePasswordDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<ChangePasswordResponseDto>>;
    /**
     * @param createUserDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    authControllerCreateStudent(createUserDto: CreateUserDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    authControllerCreateStudent(createUserDto: CreateUserDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    authControllerCreateStudent(createUserDto: CreateUserDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * @param recoveryPasswordDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    authControllerGenerateRecovery(recoveryPasswordDto: RecoveryPasswordDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<RecoveryPasswordDto>;
    authControllerGenerateRecovery(recoveryPasswordDto: RecoveryPasswordDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<RecoveryPasswordDto>>;
    authControllerGenerateRecovery(recoveryPasswordDto: RecoveryPasswordDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<RecoveryPasswordDto>>;
    /**
     * @param recoveryToken
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    authControllerGetRecoveryById(recoveryToken: string, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<RecoveryPasswordResponseDto>;
    authControllerGetRecoveryById(recoveryToken: string, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<RecoveryPasswordResponseDto>>;
    authControllerGetRecoveryById(recoveryToken: string, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<RecoveryPasswordResponseDto>>;
    /**
     * @param loginDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    authControllerLogin(loginDto: LoginDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<LoginUserResponseDto>;
    authControllerLogin(loginDto: LoginDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<LoginUserResponseDto>>;
    authControllerLogin(loginDto: LoginDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<LoginUserResponseDto>>;
    /**
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    authControllerLogout(observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<any>;
    authControllerLogout(observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpResponse<any>>;
    authControllerLogout(observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: undefined;
        context?: HttpContext;
    }): Observable<HttpEvent<any>>;
    /**
     * @param recoveryToken
     * @param changePasswordDto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    authControllerPostRecoveryById(recoveryToken: string, changePasswordDto: ChangePasswordDto, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<RecoveryPasswordResponseDto>;
    authControllerPostRecoveryById(recoveryToken: string, changePasswordDto: ChangePasswordDto, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<RecoveryPasswordResponseDto>>;
    authControllerPostRecoveryById(recoveryToken: string, changePasswordDto: ChangePasswordDto, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<RecoveryPasswordResponseDto>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
