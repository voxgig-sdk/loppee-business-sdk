import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { UnsaveBusiness, UnsaveBusinessCreateData } from '../LoppeeBusinessTypes';
declare class UnsaveBusinessEntity extends LoppeeBusinessEntityBase<UnsaveBusiness> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: UnsaveBusinessEntity): UnsaveBusinessEntity;
    create(this: any, reqdata?: UnsaveBusinessCreateData, ctrl?: Control): Promise<UnsaveBusinessEntity>;
}
export { UnsaveBusinessEntity };
