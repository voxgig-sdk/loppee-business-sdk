import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { CommercialClick, CommercialClickCreateData } from '../LoppeeBusinessTypes';
declare class CommercialClickEntity extends LoppeeBusinessEntityBase<CommercialClick> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: CommercialClickEntity): CommercialClickEntity;
    create(this: any, reqdata?: CommercialClickCreateData, ctrl?: Control): Promise<CommercialClickEntity>;
}
export { CommercialClickEntity };
