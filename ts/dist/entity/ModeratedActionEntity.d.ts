import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { ModeratedAction, ModeratedActionLoadMatch, ModeratedActionCreateData } from '../LoppeeBusinessTypes';
declare class ModeratedActionEntity extends LoppeeBusinessEntityBase<ModeratedAction> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: ModeratedActionEntity): ModeratedActionEntity;
    load(this: any, reqmatch?: ModeratedActionLoadMatch, ctrl?: Control): Promise<ModeratedActionEntity>;
    create(this: any, reqdata?: ModeratedActionCreateData, ctrl?: Control): Promise<ModeratedActionEntity>;
}
export { ModeratedActionEntity };
