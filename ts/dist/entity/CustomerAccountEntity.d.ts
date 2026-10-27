import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { CustomerAccount, CustomerAccountCreateData } from '../LoppeeBusinessTypes';
declare class CustomerAccountEntity extends LoppeeBusinessEntityBase<CustomerAccount> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: CustomerAccountEntity): CustomerAccountEntity;
    create(this: any, reqdata?: CustomerAccountCreateData, ctrl?: Control): Promise<CustomerAccountEntity>;
}
export { CustomerAccountEntity };
