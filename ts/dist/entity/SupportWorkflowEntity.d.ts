import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { SupportWorkflow, SupportWorkflowCreateData } from '../LoppeeBusinessTypes';
declare class SupportWorkflowEntity extends LoppeeBusinessEntityBase<SupportWorkflow> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: SupportWorkflowEntity): SupportWorkflowEntity;
    create(this: any, reqdata?: SupportWorkflowCreateData, ctrl?: Control): Promise<SupportWorkflowEntity>;
}
export { SupportWorkflowEntity };
