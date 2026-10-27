import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { ChatAttachmentUrl, ChatAttachmentUrlCreateData } from '../LoppeeBusinessTypes';
declare class ChatAttachmentUrlEntity extends LoppeeBusinessEntityBase<ChatAttachmentUrl> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: ChatAttachmentUrlEntity): ChatAttachmentUrlEntity;
    create(this: any, reqdata?: ChatAttachmentUrlCreateData, ctrl?: Control): Promise<ChatAttachmentUrlEntity>;
}
export { ChatAttachmentUrlEntity };
