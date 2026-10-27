import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { DestinationAddressSuggestion, DestinationAddressSuggestionCreateData } from '../LoppeeBusinessTypes';
declare class DestinationAddressSuggestionEntity extends LoppeeBusinessEntityBase<DestinationAddressSuggestion> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: DestinationAddressSuggestionEntity): DestinationAddressSuggestionEntity;
    create(this: any, reqdata?: DestinationAddressSuggestionCreateData, ctrl?: Control): Promise<DestinationAddressSuggestionEntity>;
}
export { DestinationAddressSuggestionEntity };
