import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { DestinationLocationProof, DestinationLocationProofCreateData } from '../LoppeeBusinessTypes';
declare class DestinationLocationProofEntity extends LoppeeBusinessEntityBase<DestinationLocationProof> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: DestinationLocationProofEntity): DestinationLocationProofEntity;
    create(this: any, reqdata?: DestinationLocationProofCreateData, ctrl?: Control): Promise<DestinationLocationProofEntity>;
}
export { DestinationLocationProofEntity };
