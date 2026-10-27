import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { ConversationClose, ConversationCloseCreateData } from '../LoppeeBusinessTypes';
declare class ConversationCloseEntity extends LoppeeBusinessEntityBase<ConversationClose> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: ConversationCloseEntity): ConversationCloseEntity;
    create(this: any, reqdata?: ConversationCloseCreateData, ctrl?: Control): Promise<ConversationCloseEntity>;
}
export { ConversationCloseEntity };
