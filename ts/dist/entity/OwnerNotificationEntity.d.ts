import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { OwnerNotification, OwnerNotificationCreateData } from '../LoppeeBusinessTypes';
declare class OwnerNotificationEntity extends LoppeeBusinessEntityBase<OwnerNotification> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: OwnerNotificationEntity): OwnerNotificationEntity;
    create(this: any, reqdata?: OwnerNotificationCreateData, ctrl?: Control): Promise<OwnerNotificationEntity>;
}
export { OwnerNotificationEntity };
