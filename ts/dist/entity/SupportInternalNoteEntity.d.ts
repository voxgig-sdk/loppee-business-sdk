import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { SupportInternalNote, SupportInternalNoteCreateData } from '../LoppeeBusinessTypes';
declare class SupportInternalNoteEntity extends LoppeeBusinessEntityBase<SupportInternalNote> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: SupportInternalNoteEntity): SupportInternalNoteEntity;
    create(this: any, reqdata?: SupportInternalNoteCreateData, ctrl?: Control): Promise<SupportInternalNoteEntity>;
}
export { SupportInternalNoteEntity };
