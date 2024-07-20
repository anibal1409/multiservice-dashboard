import { Inject, Injectable, Optional, } from '@angular/core';
import * as toastr from 'toastr';
import { TOAST_OPTIONS } from './options-token';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
export class ToastService {
    constructor(options = { preventDuplicates: true }, translateService) {
        this.options = options;
        this.translateService = translateService;
        Object.assign(toastr.options, this.options);
    }
    error(message) {
        toastr.error(this.translateService.instant(message));
    }
    warning(message) {
        toastr.warning(this.translateService.instant(message));
    }
    success(message) {
        toastr.success(this.translateService.instant(message));
    }
    info(message) {
        toastr.info(this.translateService.instant(message));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToastService, deps: [{ token: TOAST_OPTIONS, optional: true }, { token: i1.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToastService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TOAST_OPTIONS]
                }] }, { type: i1.TranslateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3RvYXN0L3NyYy9saWIvdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFDVixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFJakMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFHaEQsTUFBTSxPQUFPLFlBQVk7SUFDdkIsWUFHVSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLEVBQ3JDLGdCQUFrQztRQURsQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtRQUNyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFlO1FBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZTtRQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWU7UUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFlO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7K0dBeEJVLFlBQVksa0JBR2IsYUFBYTttSEFIWixZQUFZOzs0RkFBWixZQUFZO2tCQUR4QixVQUFVOzswQkFHTixRQUFROzswQkFDUixNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgdG9hc3RyIGZyb20gJ3RvYXN0cic7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuaW1wb3J0IHsgVE9BU1RfT1BUSU9OUyB9IGZyb20gJy4vb3B0aW9ucy10b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoVE9BU1RfT1BUSU9OUylcbiAgICBwcml2YXRlIG9wdGlvbnMgPSB7IHByZXZlbnREdXBsaWNhdGVzOiB0cnVlIH0sXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odG9hc3RyLm9wdGlvbnMsIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0b2FzdHIuZXJyb3IodGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQobWVzc2FnZSkpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0b2FzdHIud2FybmluZyh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuaW5zdGFudChtZXNzYWdlKSk7XG4gIH1cblxuICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIHRvYXN0ci5zdWNjZXNzKHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KG1lc3NhZ2UpKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdG9hc3RyLmluZm8odGhpcy50cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQobWVzc2FnZSkpO1xuICB9XG59XG4iXX0=