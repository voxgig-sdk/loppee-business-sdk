import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { OperationType, OperationCreateData, OperationUpdateData, OperationPatchData, OperationRemoveMatch } from '../LoppeeBusinessTypes';
declare class OperationEntity extends LoppeeBusinessEntityBase<OperationType> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: OperationEntity): OperationEntity;
    create(this: any, reqdata?: OperationCreateData, ctrl?: Control): Promise<OperationEntity>;
    update(this: any, reqdata?: OperationUpdateData, ctrl?: Control): Promise<OperationEntity>;
    patch(this: any, reqdata?: OperationPatchData, ctrl?: Control): Promise<OperationEntity>;
    remove(this: any, reqmatch?: OperationRemoveMatch, ctrl?: Control): Promise<OperationEntity>;
}
export { OperationEntity };
