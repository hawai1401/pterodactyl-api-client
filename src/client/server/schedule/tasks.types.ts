import type { BaseArgs } from '../../../types.js';
import type { Signal, TaskAction } from '../server.types.js';

export interface CreateScheduleTaskArgs<
  T extends TaskAction = TaskAction,
> extends BaseArgs {
  action: T;
  payload: T extends 'power' ? Signal : string;
  time_offset: number;
  continue_on_failure?: boolean | undefined;
}
