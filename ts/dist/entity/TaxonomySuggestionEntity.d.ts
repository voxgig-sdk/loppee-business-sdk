import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { TaxonomySuggestion, TaxonomySuggestionListMatch } from '../LoppeeBusinessTypes';
declare class TaxonomySuggestionEntity extends LoppeeBusinessEntityBase<TaxonomySuggestion> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: TaxonomySuggestionEntity): TaxonomySuggestionEntity;
    list(this: any, reqmatch?: TaxonomySuggestionListMatch, ctrl?: Control): Promise<TaxonomySuggestionEntity[]>;
}
export { TaxonomySuggestionEntity };
