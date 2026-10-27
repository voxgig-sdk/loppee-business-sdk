import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { AgentCapability, AgentCapabilityLoadMatch } from '../LoppeeBusinessTypes';
declare class AgentCapabilityEntity extends LoppeeBusinessEntityBase<AgentCapability> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: AgentCapabilityEntity): AgentCapabilityEntity;
    load(this: any, reqmatch?: AgentCapabilityLoadMatch, ctrl?: Control): Promise<AgentCapabilityEntity>;
}
export { AgentCapabilityEntity };
