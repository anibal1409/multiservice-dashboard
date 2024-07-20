/**
 * Estandariza los errores generados por los validadores propios de Angular
 * para ser utilizacos en el servicio de internacionalización
 */
export function parseError(error) {
    const keyError = Object.keys(error)[0];
    let args = {};
    switch (keyError) {
        case 'min':
            args = { min: error[keyError].min };
            break;
        case 'max':
            args = { max: error[keyError].max };
            break;
        case 'minlength':
            args = { minlength: error[keyError].requiredLength };
            break;
        case 'maxlength':
            args = { maxlength: error[keyError].requiredLength };
            break;
        default:
            break;
    }
    return {
        message: keyError,
        args,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbHRpbi1lcnJvcnMtcGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZm9ybS1jb250cm9sLWVycm9ycy9zcmMvbGliL3V0aWxzL2J1aWx0aW4tZXJyb3JzLXBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQXVCO0lBQ2hELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO0lBQ25CLFFBQVEsUUFBUSxFQUFFO1FBQ2hCLEtBQUssS0FBSztZQUNSLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEMsTUFBTTtRQUNSLEtBQUssS0FBSztZQUNSLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEMsTUFBTTtRQUNSLEtBQUssV0FBVztZQUNkLElBQUksR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDckQsTUFBTTtRQUNSLEtBQUssV0FBVztZQUNkLElBQUksR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDckQsTUFBTTtRQUNSO1lBQ0UsTUFBTTtLQUNUO0lBRUQsT0FBTztRQUNMLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUk7S0FDTCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkRXJyb3Ige1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGFyZ3M/OiBhbnk7XG59XG5cbi8qKlxuICogRXN0YW5kYXJpemEgbG9zIGVycm9yZXMgZ2VuZXJhZG9zIHBvciBsb3MgdmFsaWRhZG9yZXMgcHJvcGlvcyBkZSBBbmd1bGFyXG4gKiBwYXJhIHNlciB1dGlsaXphY29zIGVuIGVsIHNlcnZpY2lvIGRlIGludGVybmFjaW9uYWxpemFjacOzblxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFcnJvcihlcnJvcjogVmFsaWRhdGlvbkVycm9ycyk6IFBhcnNlZEVycm9yIHtcbiAgY29uc3Qga2V5RXJyb3IgPSBPYmplY3Qua2V5cyhlcnJvcilbMF07XG4gIGxldCBhcmdzOiBhbnkgPSB7fTtcbiAgc3dpdGNoIChrZXlFcnJvcikge1xuICAgIGNhc2UgJ21pbic6XG4gICAgICBhcmdzID0geyBtaW46IGVycm9yW2tleUVycm9yXS5taW4gfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21heCc6XG4gICAgICBhcmdzID0geyBtYXg6IGVycm9yW2tleUVycm9yXS5tYXggfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pbmxlbmd0aCc6XG4gICAgICBhcmdzID0geyBtaW5sZW5ndGg6IGVycm9yW2tleUVycm9yXS5yZXF1aXJlZExlbmd0aCB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWF4bGVuZ3RoJzpcbiAgICAgIGFyZ3MgPSB7IG1heGxlbmd0aDogZXJyb3Jba2V5RXJyb3JdLnJlcXVpcmVkTGVuZ3RoIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2U6IGtleUVycm9yLFxuICAgIGFyZ3MsXG4gIH07XG59XG4iXX0=