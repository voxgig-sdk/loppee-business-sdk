import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { DomainTrustCard, DomainTrustCardLoadMatch } from '../LoppeeBusinessTypes';
declare class DomainTrustCardEntity extends LoppeeBusinessEntityBase<DomainTrustCard> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: DomainTrustCardEntity): DomainTrustCardEntity;
    load(this: any, reqmatch?: DomainTrustCardLoadMatch, ctrl?: Control): Promise<DomainTrustCardEntity>;
}
export { DomainTrustCardEntity };
