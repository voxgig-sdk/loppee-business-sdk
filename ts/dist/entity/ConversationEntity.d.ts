import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { Conversation, ConversationCreateData } from '../LoppeeBusinessTypes';
declare class ConversationEntity extends LoppeeBusinessEntityBase<Conversation> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: ConversationEntity): ConversationEntity;
    create(this: any, reqdata?: ConversationCreateData, ctrl?: Control): Promise<ConversationEntity>;
}
export { ConversationEntity };
