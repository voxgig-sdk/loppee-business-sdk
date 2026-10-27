import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { BusinessClaim, BusinessClaimCreateData } from '../LoppeeBusinessTypes';
declare class BusinessClaimEntity extends LoppeeBusinessEntityBase<BusinessClaim> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: BusinessClaimEntity): BusinessClaimEntity;
    create(this: any, reqdata?: BusinessClaimCreateData, ctrl?: Control): Promise<BusinessClaimEntity>;
}
export { BusinessClaimEntity };
