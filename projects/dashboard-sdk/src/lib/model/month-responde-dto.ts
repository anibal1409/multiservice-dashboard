/**
 * Laboratory
 * The Laboratory-API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GenderMonthRespondeDto } from './gender-month-responde-dto';
import { ExamDto } from './exam-dto';


export interface MonthRespondeDto { 
    gender: GenderMonthRespondeDto;
    typesExam: object;
    exams: Array<ExamDto>;
}

