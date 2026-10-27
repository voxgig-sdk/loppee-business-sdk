import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { AnonymousLocationProofRevocation, AnonymousLocationProofRevocationCreateData, AnonymousLocationProofRevocationRemoveMatch } from '../LoppeeBusinessTypes';
declare class AnonymousLocationProofRevocationEntity extends LoppeeBusinessEntityBase<AnonymousLocationProofRevocation> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: AnonymousLocationProofRevocationEntity): AnonymousLocationProofRevocationEntity;
    create(this: any, reqdata?: AnonymousLocationProofRevocationCreateData, ctrl?: Control): Promise<AnonymousLocationProofRevocationEntity>;
    remove(this: any, reqmatch?: AnonymousLocationProofRevocationRemoveMatch, ctrl?: Control): Promise<AnonymousLocationProofRevocationEntity>;
}
export { AnonymousLocationProofRevocationEntity };
