/**
 * KTM
 * The KTM-API description
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CreateOrderProductDto } from './create-order-product-dto';
export interface UpdateOrderDto {
    date?: string;
    deadline?: string;
    note?: string;
    stage?: string;
    provider?: string;
    total?: number;
    orderProducts?: Array<CreateOrderProductDto>;
}
