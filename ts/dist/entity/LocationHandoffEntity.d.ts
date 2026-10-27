import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { LocationHandoff, LocationHandoffCreateData } from '../LoppeeBusinessTypes';
declare class LocationHandoffEntity extends LoppeeBusinessEntityBase<LocationHandoff> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: LocationHandoffEntity): LocationHandoffEntity;
    create(this: any, reqdata?: LocationHandoffCreateData, ctrl?: Control): Promise<LocationHandoffEntity>;
}
export { LocationHandoffEntity };
