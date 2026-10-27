import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { AgentPolicy, AgentPolicyLoadMatch } from '../LoppeeBusinessTypes';
declare class AgentPolicyEntity extends LoppeeBusinessEntityBase<AgentPolicy> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: AgentPolicyEntity): AgentPolicyEntity;
    load(this: any, reqmatch?: AgentPolicyLoadMatch, ctrl?: Control): Promise<AgentPolicyEntity>;
}
export { AgentPolicyEntity };
