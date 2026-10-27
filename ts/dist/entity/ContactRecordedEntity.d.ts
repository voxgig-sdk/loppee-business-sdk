import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { ContactRecorded, ContactRecordedCreateData } from '../LoppeeBusinessTypes';
declare class ContactRecordedEntity extends LoppeeBusinessEntityBase<ContactRecorded> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: ContactRecordedEntity): ContactRecordedEntity;
    create(this: any, reqdata?: ContactRecordedCreateData, ctrl?: Control): Promise<ContactRecordedEntity>;
}
export { ContactRecordedEntity };
