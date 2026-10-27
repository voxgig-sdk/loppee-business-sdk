import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { Revoke, RevokeCreateData } from '../LoppeeBusinessTypes';
declare class RevokeEntity extends LoppeeBusinessEntityBase<Revoke> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: RevokeEntity): RevokeEntity;
    create(this: any, reqdata?: RevokeCreateData, ctrl?: Control): Promise<RevokeEntity>;
}
export { RevokeEntity };
