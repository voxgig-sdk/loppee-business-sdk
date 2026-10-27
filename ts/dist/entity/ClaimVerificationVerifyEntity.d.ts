import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { ClaimVerificationVerify, ClaimVerificationVerifyCreateData } from '../LoppeeBusinessTypes';
declare class ClaimVerificationVerifyEntity extends LoppeeBusinessEntityBase<ClaimVerificationVerify> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: ClaimVerificationVerifyEntity): ClaimVerificationVerifyEntity;
    create(this: any, reqdata?: ClaimVerificationVerifyCreateData, ctrl?: Control): Promise<ClaimVerificationVerifyEntity>;
}
export { ClaimVerificationVerifyEntity };
