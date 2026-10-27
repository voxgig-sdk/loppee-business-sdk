import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { BusinessOwner, BusinessOwnerCreateData, BusinessOwnerUpdateData } from '../LoppeeBusinessTypes';
declare class BusinessOwnerEntity extends LoppeeBusinessEntityBase<BusinessOwner> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: BusinessOwnerEntity): BusinessOwnerEntity;
    create(this: any, reqdata?: BusinessOwnerCreateData, ctrl?: Control): Promise<BusinessOwnerEntity>;
    update(this: any, reqdata?: BusinessOwnerUpdateData, ctrl?: Control): Promise<BusinessOwnerEntity>;
}
export { BusinessOwnerEntity };
