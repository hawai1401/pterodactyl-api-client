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
    };
}
export interface BaseNest {
    id: number;
    uuid: string;
    author: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=nest.types.d.ts.map