import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { BusinessApplication, BusinessApplicationCreateData } from '../LoppeeBusinessTypes';
declare class BusinessApplicationEntity extends LoppeeBusinessEntityBase<BusinessApplication> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: BusinessApplicationEntity): BusinessApplicationEntity;
    create(this: any, reqdata?: BusinessApplicationCreateData, ctrl?: Control): Promise<BusinessApplicationEntity>;
}
export { BusinessApplicationEntity };
