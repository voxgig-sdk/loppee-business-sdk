import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { OwnerWebhookRegistration, OwnerWebhookRegistrationCreateData } from '../LoppeeBusinessTypes';
declare class OwnerWebhookRegistrationEntity extends LoppeeBusinessEntityBase<OwnerWebhookRegistration> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: OwnerWebhookRegistrationEntity): OwnerWebhookRegistrationEntity;
    create(this: any, reqdata?: OwnerWebhookRegistrationCreateData, ctrl?: Control): Promise<OwnerWebhookRegistrationEntity>;
}
export { OwnerWebhookRegistrationEntity };
