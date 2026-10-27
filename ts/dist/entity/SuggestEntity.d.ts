import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { Suggest, SuggestListMatch } from '../LoppeeBusinessTypes';
declare class SuggestEntity extends LoppeeBusinessEntityBase<Suggest> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: SuggestEntity): SuggestEntity;
    list(this: any, reqmatch?: SuggestListMatch, ctrl?: Control): Promise<SuggestEntity[]>;
}
export { SuggestEntity };
