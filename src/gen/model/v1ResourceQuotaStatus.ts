/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.15.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* ResourceQuotaStatus defines the enforced hard limits and observed use.
*/
export class V1ResourceQuotaStatus {
    /**
    * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
    */
    'hard'?: { [key: string]: string; };
    /**
    * Used is the current observed total usage of the resource in the namespace.
    */
    'used'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "hard",
            "baseName": "hard",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "used",
            "baseName": "used",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return V1ResourceQuotaStatus.attributeTypeMap;
    }
}

