import type { BasePayload, EnvironmentVariable, ObjectList } from '../../../types.js';
export interface EggVariableObject {
    object: 'egg_variable';
    attributes: {
        name: string;
        description: string;
        env_variable: Uppercase<string>;
        default_value: string;
        server_value: string;
        is_editable: boolean;
        rules: string;
    };
}
export interface EggVariable {
    name: string;
    description: string;
    envVariable: Uppercase<string>;
    defaultValue: string;
    serverValue: string;
    isEditable: boolean;
    rules: string;
}
export interface StartupConfig {
    data: EggVariable[];
    startupCommand: string;
    rawStartupCommand: string;
    dockerImages: Record<EnvironmentVariable, string>;
}
export interface EggVariableObjectList extends ObjectList<EggVariableObject> {
    meta: {
        startup_command: string;
        raw_startup_command: string;
        docker_images: Record<string, string>;
    };
}
export interface SetEnvironmentVariablePayload extends BasePayload {
    key: EnvironmentVariable;
    value: string;
}
//# sourceMappingURL=startup.types.d.ts.map