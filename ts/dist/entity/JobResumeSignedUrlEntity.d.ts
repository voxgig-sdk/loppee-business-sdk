import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { JobResumeSignedUrl, JobResumeSignedUrlCreateData } from '../LoppeeBusinessTypes';
declare class JobResumeSignedUrlEntity extends LoppeeBusinessEntityBase<JobResumeSignedUrl> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: JobResumeSignedUrlEntity): JobResumeSignedUrlEntity;
    create(this: any, reqdata?: JobResumeSignedUrlCreateData, ctrl?: Control): Promise<JobResumeSignedUrlEntity>;
}
export { JobResumeSignedUrlEntity };
