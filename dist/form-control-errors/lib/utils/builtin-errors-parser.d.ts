import { ValidationErrors } from '@angular/forms';
export interface ParsedError {
    message: string;
    args?: any;
}
/**
 * Estandariza los errores generados por los validadores propios de Angular
 * para ser utilizacos en el servicio de internacionalización
 */
export declare function parseError(error: ValidationErrors): ParsedError;
