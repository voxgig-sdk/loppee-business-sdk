import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { WithdrawJobApplication, WithdrawJobApplicationCreateData } from '../LoppeeBusinessTypes';
declare class WithdrawJobApplicationEntity extends LoppeeBusinessEntityBase<WithdrawJobApplication> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: WithdrawJobApplicationEntity): WithdrawJobApplicationEntity;
    create(this: any, reqdata?: WithdrawJobApplicationCreateData, ctrl?: Control): Promise<WithdrawJobApplicationEntity>;
}
export { WithdrawJobApplicationEntity };
