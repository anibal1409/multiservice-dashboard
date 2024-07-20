import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export var ErrorSource;
(function (ErrorSource) {
    ErrorSource["Client"] = "CLIENT";
    ErrorSource["Server"] = "SERVER";
})(ErrorSource || (ErrorSource = {}));
/**
 * Da formato a los errores dependiendo de su origen (Cliente / servidor)
 */
export class ErrorParserService {
    constructor() { }
    getClientMessage(error) {
        if (!navigator.onLine) {
            return 'No Internet Connection';
        }
        return error?.message ? error?.message : error?.toString();
    }
    getServerMessage(error) {
        let message = 'UNKNOW_SERVER_ERROR';
        if (error.code || error.statusCode) {
            message = error.description || error.message || message;
        }
        return message;
    }
    /**
     * Indica la fuente del error: HTTP ó una acción del
     * lado del cliente
     */
    getErrorAndSource(error) {
        let source = ErrorSource.Client;
        let unwrappedError = error;
        let message = error?.message;
        if (error instanceof HttpErrorResponse) {
            source = ErrorSource.Server;
            unwrappedError = error.error;
            message = this.getServerMessage(unwrappedError);
        }
        else if (error?.rejection instanceof HttpErrorResponse) {
            source = ErrorSource.Server;
            unwrappedError = error?.rejection?.error;
            message = this.getClientMessage(unwrappedError);
        }
        return {
            source,
            error: unwrappedError,
        };
    }
    getMessage(error) {
        const { source, error: ex } = this.getErrorAndSource(error);
        const parsedError = ErrorSource.Server === source
            ? this.getServerMessage(ex)
            : this.getClientMessage(ex);
        return parsedError || error?.message;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorParserService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorParserService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorParserService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItcGFyc2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcnJvci1oYW5kbGVyL3NyYy9saWIvZXJyb3ItcGFyc2VyL2Vycm9yLXBhcnNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE1BQU0sQ0FBTixJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDckIsZ0NBQWlCLENBQUE7SUFDakIsZ0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLFdBQVcsS0FBWCxXQUFXLFFBR3RCO0FBa0JEOztHQUVHO0FBRUgsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixnQkFBZSxDQUFDO0lBRWhCLGdCQUFnQixDQUFDLEtBQVk7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckIsT0FBTyx3QkFBd0IsQ0FBQztTQUNqQztRQUNELE9BQU8sS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFrQjtRQUNqQyxJQUFJLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUNwQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNsQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQztTQUN6RDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQkFBaUIsQ0FBQyxLQUFVO1FBQzFCLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksT0FBTyxHQUFHLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDN0IsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7WUFDdEMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDNUIsY0FBYyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDN0IsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNqRDthQUFNLElBQUksS0FBSyxFQUFFLFNBQVMsWUFBWSxpQkFBaUIsRUFBRTtZQUN4RCxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUM1QixjQUFjLEdBQUcsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUM7WUFDekMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU87WUFDTCxNQUFNO1lBQ04sS0FBSyxFQUFFLGNBQWM7U0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBZ0M7UUFDekMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELE1BQU0sV0FBVyxHQUNmLFdBQVcsQ0FBQyxNQUFNLEtBQUssTUFBTTtZQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sV0FBVyxJQUFJLEtBQUssRUFBRSxPQUFPLENBQUM7SUFDdkMsQ0FBQzsrR0FoRFUsa0JBQWtCO21IQUFsQixrQkFBa0I7OzRGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGVudW0gRXJyb3JTb3VyY2Uge1xuICBDbGllbnQgPSAnQ0xJRU5UJyxcbiAgU2VydmVyID0gJ1NFUlZFUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHBhdGg6IHN0cmluZztcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xuICAvKiogQ8OzZGlnbyBpbnRlcm5vIGRlIGxhIGFwbGljYWNpw7NuICovXG4gIGNvZGU/OiBzdHJpbmc7XG4gIHRpbWVzdGFtcDogRGF0ZTtcbiAgLyoqIFByb3ZlZSBtw6FzIGRldGFsbGVzIGRlbCBlcnJvciwoIFRyYWR1Y2lkbykgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkRXJyb3Ige1xuICBzb3VyY2U6IEVycm9yU291cmNlO1xuICBlcnJvcjogYW55O1xuICBtZXNzYWdlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERhIGZvcm1hdG8gYSBsb3MgZXJyb3JlcyBkZXBlbmRpZW5kbyBkZSBzdSBvcmlnZW4gKENsaWVudGUgLyBzZXJ2aWRvcilcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVycm9yUGFyc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXRDbGllbnRNZXNzYWdlKGVycm9yOiBFcnJvcik6IHN0cmluZyB7XG4gICAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XG4gICAgICByZXR1cm4gJ05vIEludGVybmV0IENvbm5lY3Rpb24nO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I/Lm1lc3NhZ2UgPyBlcnJvcj8ubWVzc2FnZSA6IGVycm9yPy50b1N0cmluZygpO1xuICB9XG5cbiAgZ2V0U2VydmVyTWVzc2FnZShlcnJvcjogQ3VzdG9tRXJyb3IpOiBzdHJpbmcge1xuICAgIGxldCBtZXNzYWdlID0gJ1VOS05PV19TRVJWRVJfRVJST1InO1xuICAgIGlmIChlcnJvci5jb2RlIHx8IGVycm9yLnN0YXR1c0NvZGUpIHtcbiAgICAgIG1lc3NhZ2UgPSBlcnJvci5kZXNjcmlwdGlvbiB8fCBlcnJvci5tZXNzYWdlIHx8IG1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYSBsYSBmdWVudGUgZGVsIGVycm9yOiBIVFRQIMOzIHVuYSBhY2Npw7NuIGRlbFxuICAgKiBsYWRvIGRlbCBjbGllbnRlXG4gICAqL1xuICBnZXRFcnJvckFuZFNvdXJjZShlcnJvcjogYW55KTogUGFyc2VkRXJyb3Ige1xuICAgIGxldCBzb3VyY2UgPSBFcnJvclNvdXJjZS5DbGllbnQ7XG4gICAgbGV0IHVud3JhcHBlZEVycm9yID0gZXJyb3I7XG4gICAgbGV0IG1lc3NhZ2UgPSBlcnJvcj8ubWVzc2FnZTtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgc291cmNlID0gRXJyb3JTb3VyY2UuU2VydmVyO1xuICAgICAgdW53cmFwcGVkRXJyb3IgPSBlcnJvci5lcnJvcjtcbiAgICAgIG1lc3NhZ2UgPSB0aGlzLmdldFNlcnZlck1lc3NhZ2UodW53cmFwcGVkRXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoZXJyb3I/LnJlamVjdGlvbiBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICBzb3VyY2UgPSBFcnJvclNvdXJjZS5TZXJ2ZXI7XG4gICAgICB1bndyYXBwZWRFcnJvciA9IGVycm9yPy5yZWplY3Rpb24/LmVycm9yO1xuICAgICAgbWVzc2FnZSA9IHRoaXMuZ2V0Q2xpZW50TWVzc2FnZSh1bndyYXBwZWRFcnJvcik7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzb3VyY2UsXG4gICAgICBlcnJvcjogdW53cmFwcGVkRXJyb3IsXG4gICAgfTtcbiAgfVxuXG4gIGdldE1lc3NhZ2UoZXJyb3I6IEVycm9yIHwgSHR0cEVycm9yUmVzcG9uc2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgc291cmNlLCBlcnJvcjogZXggfSA9IHRoaXMuZ2V0RXJyb3JBbmRTb3VyY2UoZXJyb3IpO1xuICAgIGNvbnN0IHBhcnNlZEVycm9yID1cbiAgICAgIEVycm9yU291cmNlLlNlcnZlciA9PT0gc291cmNlXG4gICAgICAgID8gdGhpcy5nZXRTZXJ2ZXJNZXNzYWdlKGV4KVxuICAgICAgICA6IHRoaXMuZ2V0Q2xpZW50TWVzc2FnZShleCk7XG4gICAgcmV0dXJuIHBhcnNlZEVycm9yIHx8IGVycm9yPy5tZXNzYWdlO1xuICB9XG59XG4iXX0=