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
import { CreateSaleServiceDto } from './create-sale-service-dto';
import { IdCreateEntity } from './id-create-entity';
import { CreateSaleProductDto } from './create-sale-product-dto';
export interface CreateSaleDto {
    date: string;
    note?: string;
    stage: string;
    total: number;
    customer: IdCreateEntity;
    saleProducts: Array<CreateSaleProductDto>;
    saleServices: Array<CreateSaleServiceDto>;
}
