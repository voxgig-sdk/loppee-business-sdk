import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { ChatAttachment, ChatAttachmentCreateData } from '../LoppeeBusinessTypes';
declare class ChatAttachmentEntity extends LoppeeBusinessEntityBase<ChatAttachment> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: ChatAttachmentEntity): ChatAttachmentEntity;
    create(this: any, reqdata?: ChatAttachmentCreateData, ctrl?: Control): Promise<ChatAttachmentEntity>;
}
export { ChatAttachmentEntity };
