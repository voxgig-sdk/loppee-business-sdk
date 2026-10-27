import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { PublicContent, PublicContentLoadMatch } from '../LoppeeBusinessTypes';
declare class PublicContentEntity extends LoppeeBusinessEntityBase<PublicContent> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: PublicContentEntity): PublicContentEntity;
    load(this: any, reqmatch?: PublicContentLoadMatch, ctrl?: Control): Promise<PublicContentEntity>;
}
export { PublicContentEntity };
