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
import { IdCreateEntity } from './id-create-entity';
export interface CreateOrderProductDto {
    id?: number;
    amount: number;
    price: number;
    subtotal: number;
    product: IdCreateEntity;
}
