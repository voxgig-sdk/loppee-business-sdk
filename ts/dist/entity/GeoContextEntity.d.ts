import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { GeoContext, GeoContextLoadMatch } from '../LoppeeBusinessTypes';
declare class GeoContextEntity extends LoppeeBusinessEntityBase<GeoContext> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: GeoContextEntity): GeoContextEntity;
    load(this: any, reqmatch?: GeoContextLoadMatch, ctrl?: Control): Promise<GeoContextEntity>;
}
export { GeoContextEntity };
