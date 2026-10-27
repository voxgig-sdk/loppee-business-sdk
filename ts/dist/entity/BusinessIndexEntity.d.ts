import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { BusinessIndex, BusinessIndexListMatch } from '../LoppeeBusinessTypes';
declare class BusinessIndexEntity extends LoppeeBusinessEntityBase<BusinessIndex> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: BusinessIndexEntity): BusinessIndexEntity;
    list(this: any, reqmatch?: BusinessIndexListMatch, ctrl?: Control): Promise<BusinessIndexEntity[]>;
}
export { BusinessIndexEntity };
