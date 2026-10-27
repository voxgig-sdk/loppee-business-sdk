import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { AgentConnectionTest, AgentConnectionTestCreateData } from '../LoppeeBusinessTypes';
declare class AgentConnectionTestEntity extends LoppeeBusinessEntityBase<AgentConnectionTest> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: AgentConnectionTestEntity): AgentConnectionTestEntity;
    create(this: any, reqdata?: AgentConnectionTestCreateData, ctrl?: Control): Promise<AgentConnectionTestEntity>;
}
export { AgentConnectionTestEntity };
