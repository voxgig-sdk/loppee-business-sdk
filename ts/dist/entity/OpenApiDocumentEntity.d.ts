import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { OpenApiDocument, OpenApiDocumentListMatch } from '../LoppeeBusinessTypes';
declare class OpenApiDocumentEntity extends LoppeeBusinessEntityBase<OpenApiDocument> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: OpenApiDocumentEntity): OpenApiDocumentEntity;
    list(this: any, reqmatch?: OpenApiDocumentListMatch, ctrl?: Control): Promise<OpenApiDocumentEntity[]>;
}
export { OpenApiDocumentEntity };
