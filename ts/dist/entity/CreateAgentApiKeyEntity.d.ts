import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { CreateAgentApiKey, CreateAgentApiKeyCreateData } from '../LoppeeBusinessTypes';
declare class CreateAgentApiKeyEntity extends LoppeeBusinessEntityBase<CreateAgentApiKey> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: CreateAgentApiKeyEntity): CreateAgentApiKeyEntity;
    create(this: any, reqdata?: CreateAgentApiKeyCreateData, ctrl?: Control): Promise<CreateAgentApiKeyEntity>;
}
export { CreateAgentApiKeyEntity };
