import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { AgentOpenapi, AgentOpenapiListMatch } from '../LoppeeBusinessTypes';
declare class AgentOpenapiEntity extends LoppeeBusinessEntityBase<AgentOpenapi> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: AgentOpenapiEntity): AgentOpenapiEntity;
    list(this: any, reqmatch?: AgentOpenapiListMatch, ctrl?: Control): Promise<AgentOpenapiEntity[]>;
}
export { AgentOpenapiEntity };
