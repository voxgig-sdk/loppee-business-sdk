import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { Customer, CustomerCreateData } from '../LoppeeBusinessTypes';
declare class CustomerEntity extends LoppeeBusinessEntityBase<Customer> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: CustomerEntity): CustomerEntity;
    create(this: any, reqdata?: CustomerCreateData, ctrl?: Control): Promise<CustomerEntity>;
}
export { CustomerEntity };
