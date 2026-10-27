import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { Review, ReviewCreateData } from '../LoppeeBusinessTypes';
declare class ReviewEntity extends LoppeeBusinessEntityBase<Review> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: ReviewEntity): ReviewEntity;
    create(this: any, reqdata?: ReviewCreateData, ctrl?: Control): Promise<ReviewEntity>;
}
export { ReviewEntity };
