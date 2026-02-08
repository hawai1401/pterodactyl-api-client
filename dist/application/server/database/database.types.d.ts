import type { ApplicationDatabaseAttributes } from "../databases/databases.types.js";
export interface ApplicationDatabaseWithPassword {
    object: "server_database";
    attributes: ApplicationDatabaseAttributes<string> & {
        relationships: {
            password: {
                object: "database_password";
                attributes: {
                    password: string;
                };
            };
        };
    };
}
//# sourceMappingURL=database.types.d.ts.map