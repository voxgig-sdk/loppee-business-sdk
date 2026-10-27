import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { BusinessReview, BusinessReviewLoadMatch } from '../LoppeeBusinessTypes';
declare class BusinessReviewEntity extends LoppeeBusinessEntityBase<BusinessReview> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: BusinessReviewEntity): BusinessReviewEntity;
    load(this: any, reqmatch?: BusinessReviewLoadMatch, ctrl?: Control): Promise<BusinessReviewEntity>;
}
export { BusinessReviewEntity };
