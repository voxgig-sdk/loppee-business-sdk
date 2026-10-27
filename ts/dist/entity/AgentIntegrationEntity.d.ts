import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { AgentIntegration, AgentIntegrationListMatch } from '../LoppeeBusinessTypes';
declare class AgentIntegrationEntity extends LoppeeBusinessEntityBase<AgentIntegration> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: AgentIntegrationEntity): AgentIntegrationEntity;
    list(this: any, reqmatch?: AgentIntegrationListMatch, ctrl?: Control): Promise<AgentIntegrationEntity[]>;
}
export { AgentIntegrationEntity };
