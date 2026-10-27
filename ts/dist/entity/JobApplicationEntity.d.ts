import { LoppeeBusinessEntityBase } from '../LoppeeBusinessEntityBase';
import type { LoppeeBusinessSDK } from '../LoppeeBusinessSDK';
import type { Control } from '../types';
import type { JobApplication, JobApplicationCreateData } from '../LoppeeBusinessTypes';
declare class JobApplicationEntity extends LoppeeBusinessEntityBase<JobApplication> {
    constructor(client: LoppeeBusinessSDK, entopts: any);
    make(this: JobApplicationEntity): JobApplicationEntity;
    create(this: any, reqdata?: JobApplicationCreateData, ctrl?: Control): Promise<JobApplicationEntity>;
}
export { JobApplicationEntity };
