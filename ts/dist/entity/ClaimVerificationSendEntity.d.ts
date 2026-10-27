import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { ClaimVerificationSend, ClaimVerificationSendCreateData } from '../LoppeeBusinessTypes';
declare class ClaimVerificationSendEntity extends LoppeeBusinessEntityBase<ClaimVerificationSend> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: ClaimVerificationSendEntity): ClaimVerificationSendEntity;
    create(this: any, reqdata?: ClaimVerificationSendCreateData, ctrl?: Control): Promise<ClaimVerificationSendEntity>;
}
export { ClaimVerificationSendEntity };
