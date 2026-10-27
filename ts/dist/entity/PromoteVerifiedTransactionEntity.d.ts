import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { PromoteVerifiedTransaction, PromoteVerifiedTransactionCreateData } from '../LoppeeBusinessTypes';
declare class PromoteVerifiedTransactionEntity extends LoppeeBusinessEntityBase<PromoteVerifiedTransaction> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: PromoteVerifiedTransactionEntity): PromoteVerifiedTransactionEntity;
    create(this: any, reqdata?: PromoteVerifiedTransactionCreateData, ctrl?: Control): Promise<PromoteVerifiedTransactionEntity>;
}
export { PromoteVerifiedTransactionEntity };
