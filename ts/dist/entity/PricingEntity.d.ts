import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { Pricing, PricingListMatch } from '../LoppeeBusinessTypes';
declare class PricingEntity extends LoppeeBusinessEntityBase<Pricing> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: PricingEntity): PricingEntity;
    list(this: any, reqmatch?: PricingListMatch, ctrl?: Control): Promise<PricingEntity[]>;
}
export { PricingEntity };
