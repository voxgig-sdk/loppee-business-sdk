import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { AgentAccess, AgentAccessCreateData } from '../LoppeeBusinessTypes';
declare class AgentAccessEntity extends LoppeeBusinessEntityBase<AgentAccess> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: AgentAccessEntity): AgentAccessEntity;
    create(this: any, reqdata?: AgentAccessCreateData, ctrl?: Control): Promise<AgentAccessEntity>;
}
export { AgentAccessEntity };
