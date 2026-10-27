import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { BusinessDeal, BusinessDealListMatch } from '../LoppeeBusinessTypes';
declare class BusinessDealEntity extends LoppeeBusinessEntityBase<BusinessDeal> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: BusinessDealEntity): BusinessDealEntity;
    list(this: any, reqmatch?: BusinessDealListMatch, ctrl?: Control): Promise<BusinessDealEntity[]>;
}
export { BusinessDealEntity };
