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
export interface Nest {
    id: number;
    uuid: string;
    author: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=nests.types.d.ts.map