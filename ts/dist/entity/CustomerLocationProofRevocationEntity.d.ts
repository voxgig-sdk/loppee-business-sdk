import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { CustomerLocationProofRevocation, CustomerLocationProofRevocationCreateData, CustomerLocationProofRevocationRemoveMatch } from '../LoppeeBusinessTypes';
declare class CustomerLocationProofRevocationEntity extends LoppeeBusinessEntityBase<CustomerLocationProofRevocation> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: CustomerLocationProofRevocationEntity): CustomerLocationProofRevocationEntity;
    create(this: any, reqdata?: CustomerLocationProofRevocationCreateData, ctrl?: Control): Promise<CustomerLocationProofRevocationEntity>;
    remove(this: any, reqmatch?: CustomerLocationProofRevocationRemoveMatch, ctrl?: Control): Promise<CustomerLocationProofRevocationEntity>;
}
export { CustomerLocationProofRevocationEntity };
