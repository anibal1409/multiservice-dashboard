import { FormDataParserOptions } from '../interfaces';
/**
 * Convierte un objeto en FormData
 * @param obj Objeto Json
 * @returns Objeto FormData con las propiedades del objeto JSON
 */
export declare function json2FormData<T = any>(obj: T, options?: FormDataParserOptions): FormData;
