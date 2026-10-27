import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { TrustCard, TrustCardLoadMatch, TrustCardListMatch, TrustCardCreateData } from '../LoppeeBusinessTypes';
declare class TrustCardEntity extends LoppeeBusinessEntityBase<TrustCard> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: TrustCardEntity): TrustCardEntity;
    load(this: any, reqmatch?: TrustCardLoadMatch, ctrl?: Control): Promise<TrustCardEntity>;
    list(this: any, reqmatch?: TrustCardListMatch, ctrl?: Control): Promise<TrustCardEntity[]>;
    create(this: any, reqdata?: TrustCardCreateData, ctrl?: Control): Promise<TrustCardEntity>;
}
export { TrustCardEntity };
