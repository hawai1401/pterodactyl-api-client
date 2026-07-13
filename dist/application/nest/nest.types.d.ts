import type { ObjectList } from '../../types.js';
import type { Egg } from './egg/egg.class.js';
import type { EggObject } from './egg/egg.types.js';
export type NestId = number;
export interface NestObject {
    object: 'nest';
    attributes: {
        id: number;
        uuid: string;
        author: string;
        name: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        relationships: {
            eggs: ObjectList<EggObject>;
        };
    };
}
export interface BaseNest {
    id: number;
    uuid: string;
    author: string;
    name: string;
    description: string;
    eggs: Egg[];
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=nest.types.d.ts.map