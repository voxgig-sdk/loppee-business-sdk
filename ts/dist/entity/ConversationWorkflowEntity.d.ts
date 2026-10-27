import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { ConversationWorkflow, ConversationWorkflowCreateData } from '../LoppeeBusinessTypes';
declare class ConversationWorkflowEntity extends LoppeeBusinessEntityBase<ConversationWorkflow> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: ConversationWorkflowEntity): ConversationWorkflowEntity;
    create(this: any, reqdata?: ConversationWorkflowCreateData, ctrl?: Control): Promise<ConversationWorkflowEntity>;
}
export { ConversationWorkflowEntity };
