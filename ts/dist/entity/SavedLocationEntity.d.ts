import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { SavedLocation, SavedLocationUpdateData, SavedLocationRemoveMatch } from '../LoppeeBusinessTypes';
declare class SavedLocationEntity extends LoppeeBusinessEntityBase<SavedLocation> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: SavedLocationEntity): SavedLocationEntity;
    update(this: any, reqdata?: SavedLocationUpdateData, ctrl?: Control): Promise<SavedLocationEntity>;
    remove(this: any, reqmatch?: SavedLocationRemoveMatch, ctrl?: Control): Promise<SavedLocationEntity>;
}
export { SavedLocationEntity };
