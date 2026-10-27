import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { Recommend, RecommendListMatch } from '../LoppeeBusinessTypes';
declare class RecommendEntity extends LoppeeBusinessEntityBase<Recommend> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: RecommendEntity): RecommendEntity;
    list(this: any, reqmatch?: RecommendListMatch, ctrl?: Control): Promise<RecommendEntity[]>;
}
export { RecommendEntity };
