import type { IPv4 } from '../types.js';
export type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}` ? `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}` : Lowercase<S>;
export type CamelCasedProperties<T> = T extends Date | IPv4 ? T : T extends Array<infer U> ? Array<CamelCasedProperties<U>> : T extends object ? {
    [K in keyof T as SnakeToCamelCase<Extract<K, string>>]: T[K] extends object ? CamelCasedProperties<T[K]> : T[K];
} : T extends string ? SnakeToCamelCase<T> : T;
export declare const ISO_DATE_REGEX: RegExp;
export declare function toCamelCase<T extends string | number | boolean | NonNullable<object> | Array<NonNullable<object>> | null>(value: T, options?: {
    parseDates?: boolean | undefined;
}): CamelCasedProperties<T>;
//# sourceMappingURL=camelCase.d.ts.map