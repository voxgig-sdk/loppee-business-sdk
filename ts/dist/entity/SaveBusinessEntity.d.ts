import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { SaveBusiness, SaveBusinessCreateData } from '../LoppeeBusinessTypes';
declare class SaveBusinessEntity extends LoppeeBusinessEntityBase<SaveBusiness> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: SaveBusinessEntity): SaveBusinessEntity;
    create(this: any, reqdata?: SaveBusinessCreateData, ctrl?: Control): Promise<SaveBusinessEntity>;
}
export { SaveBusinessEntity };
