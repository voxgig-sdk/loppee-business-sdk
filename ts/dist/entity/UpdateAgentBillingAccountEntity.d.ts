import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { UpdateAgentBillingAccount, UpdateAgentBillingAccountCreateData } from '../LoppeeBusinessTypes';
declare class UpdateAgentBillingAccountEntity extends LoppeeBusinessEntityBase<UpdateAgentBillingAccount> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: UpdateAgentBillingAccountEntity): UpdateAgentBillingAccountEntity;
    create(this: any, reqdata?: UpdateAgentBillingAccountCreateData, ctrl?: Control): Promise<UpdateAgentBillingAccountEntity>;
}
export { UpdateAgentBillingAccountEntity };
