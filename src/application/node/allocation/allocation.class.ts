import type { HttpClient } from '../../../class/HttpClient.js';
import type { NodeAllocationManager } from './allocation.manager.js';
import { removeManagerCacheSymbol } from '../../../symbols.js';
import type { BaseApplicationAllocation } from './allocation.types.js';
import type { IPv4 } from '../../../types.js';

export class NodeAllocation {
  public id!: number;
  public ip!: IPv4;
  public alias!: string | null;
  public port!: number;
  public notes!: string | null;
  public assigned!: boolean;
  public node!: number;

  constructor(
    private httpClient: HttpClient,
    private allocationManager: NodeAllocationManager,
    data: Partial<BaseApplicationAllocation> &
      Pick<BaseApplicationAllocation, 'id' | 'node'>,
  ) {
    Object.assign(this, data);
  }

  async delete(): Promise<void> {
    this.allocationManager[removeManagerCacheSymbol](this.id);
    await this.httpClient.request(
      'DELETE',
      `/application/nodes/${this.node}/allocations/${this.id}`,
    );
  }
}
