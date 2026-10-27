import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { SavedBusiness, SavedBusinessCreateData } from '../LoppeeBusinessTypes';
declare class SavedBusinessEntity extends LoppeeBusinessEntityBase<SavedBusiness> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: SavedBusinessEntity): SavedBusinessEntity;
    create(this: any, reqdata?: SavedBusinessCreateData, ctrl?: Control): Promise<SavedBusinessEntity>;
}
export { SavedBusinessEntity };
