import type { BasePayload } from '../../../types.js';
import type { Signal, TaskAction } from '../server.types.js';
export interface TaskObject<Action extends TaskAction = TaskAction> {
    object: 'schedule_task';
    attributes: {
        id: number;
        sequence_id: number;
        action: Action;
        payload: Action extends 'power' ? Signal : string;
        time_offset: number;
        is_queued: boolean;
        continue_on_failure: boolean;
        created_at: Date;
        updated_at: Date;
    };
}
export interface Task<Action extends TaskAction = TaskAction> {
    id: number;
    sequenceId: number;
    action: Action;
    payload: Action extends 'power' ? Signal : string;
    timeOffset: number;
    isQueued: boolean;
    continueOnFailure: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface CreateTaskPayload<T extends TaskAction = TaskAction> extends BasePayload {
    action: T;
    payload: T extends 'power' ? Signal : string;
    time_offset: number;
    continue_on_failure?: boolean | undefined;
}
//# sourceMappingURL=tasks.types.d.ts.map