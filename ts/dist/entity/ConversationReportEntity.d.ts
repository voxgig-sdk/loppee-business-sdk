import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { ConversationReport, ConversationReportCreateData } from '../LoppeeBusinessTypes';
declare class ConversationReportEntity extends LoppeeBusinessEntityBase<ConversationReport> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: ConversationReportEntity): ConversationReportEntity;
    create(this: any, reqdata?: ConversationReportCreateData, ctrl?: Control): Promise<ConversationReportEntity>;
}
export { ConversationReportEntity };
