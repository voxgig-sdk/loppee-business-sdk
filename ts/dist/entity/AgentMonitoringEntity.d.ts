import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { AgentMonitoring, AgentMonitoringLoadMatch } from '../LoppeeBusinessTypes';
declare class AgentMonitoringEntity extends LoppeeBusinessEntityBase<AgentMonitoring> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: AgentMonitoringEntity): AgentMonitoringEntity;
    load(this: any, reqmatch?: AgentMonitoringLoadMatch, ctrl?: Control): Promise<AgentMonitoringEntity>;
}
export { AgentMonitoringEntity };
