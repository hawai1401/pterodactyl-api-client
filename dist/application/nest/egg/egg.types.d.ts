import type { EnvironmentVariable, ObjectList } from '../../../types.js';
export type EggId = number;
export interface ApplicationEggVariableObject {
    object: 'egg_variable';
    attributes: {
        id: number;
        egg_id: number;
        name: string;
        description: string;
        env_variable: EnvironmentVariable;
        default_value: string;
        user_viewable: boolean;
        user_editable: boolean;
        rules: string;
        created_at: Date;
        updated_at: Date;
    };
}
export interface ApplicationEggVariable {
    id: number;
    eggId: number;
    name: string;
    description: string;
    envVariable: EnvironmentVariable;
    defaultValue: string;
    userViewable: boolean;
    userEditable: boolean;
    rules: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface EggObject {
    object: 'egg';
    attributes: {
        id: number;
        uuid: string;
        name: string;
        nest: number;
        author: string;
        description: string;
        docker_image: string;
        docker_images: Record<string, string>;
        config: {
            files: Record<string, unknown>;
            startup: Record<string, unknown>;
            stop: string;
            logs: unknown;
            file_denylist: unknown;
            extends: null;
        };
        startup: string;
        script: {
            privileged: boolean;
            install: string;
            entry: string;
            container: string;
            extends: null;
        };
        created_at: Date;
        updated_at: Date;
        relationships: {
            variables: ObjectList<ApplicationEggVariableObject>;
        };
    };
}
export interface BaseEgg {
    id: number;
    uuid: string;
    name: string;
    nest: number;
    author: string;
    description: string;
    dockerImage: string;
    dockerImages: Record<string, string>;
    config: {
        files: Record<string, unknown>;
        startup: Record<string, unknown>;
        stop: string;
        logs: unknown;
        fileDenylist: unknown;
        extends: null;
    };
    startup: string;
    script: {
        privileged: boolean;
        install: string;
        entry: string;
        container: string;
        extends: null;
    };
    variables: ApplicationEggVariable[];
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=egg.types.d.ts.map