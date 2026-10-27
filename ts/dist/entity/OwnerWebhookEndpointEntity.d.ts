import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { OwnerWebhookEndpoint, OwnerWebhookEndpointCreateData } from '../LoppeeBusinessTypes';
declare class OwnerWebhookEndpointEntity extends LoppeeBusinessEntityBase<OwnerWebhookEndpoint> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: OwnerWebhookEndpointEntity): OwnerWebhookEndpointEntity;
    create(this: any, reqdata?: OwnerWebhookEndpointCreateData, ctrl?: Control): Promise<OwnerWebhookEndpointEntity>;
}
export { OwnerWebhookEndpointEntity };
