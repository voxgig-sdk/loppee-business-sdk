import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { OwnerNotificationSetting, OwnerNotificationSettingCreateData } from '../LoppeeBusinessTypes';
declare class OwnerNotificationSettingEntity extends LoppeeBusinessEntityBase<OwnerNotificationSetting> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: OwnerNotificationSettingEntity): OwnerNotificationSettingEntity;
    create(this: any, reqdata?: OwnerNotificationSettingCreateData, ctrl?: Control): Promise<OwnerNotificationSettingEntity>;
}
export { OwnerNotificationSettingEntity };
