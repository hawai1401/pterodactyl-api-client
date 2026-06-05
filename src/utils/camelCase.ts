import type { IPv4 } from '../types.js';

export type SnakeToCamelCase<S extends string> =
  S extends `${infer T}_${infer U}`
    ? `${Lowercase<T>}${Capitalize<SnakeToCamelCase<U>>}`
    : Lowercase<S>;

export type CamelCasedProperties<T> = T extends Date | IPv4
  ? T
  : T extends Array<infer U>
    ? Array<CamelCasedProperties<U>>
    : T extends object
      ? {
          [K in keyof T as SnakeToCamelCase<
            Extract<K, string>
          >]: T[K] extends object ? CamelCasedProperties<T[K]> : T[K];
        }
      : T extends string
        ? SnakeToCamelCase<T>
        : T;

export const ISO_DATE_REGEX =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}(?::?\d{2})?)$/;

export function toCamelCase<
  T extends
    | string
    | number
    | boolean
    | NonNullable<object>
    | Array<NonNullable<object>>
    | null,
>(
  value: T,
  options?: { parseDates?: boolean | undefined },
): CamelCasedProperties<T> {
  if (value === null) return value as CamelCasedProperties<T>;

  if (Array.isArray(value))
    return value.map((item) =>
      toCamelCase(item, { parseDates: options?.parseDates }),
    ) as CamelCasedProperties<T>;

  switch (typeof value) {
    case 'object':
      return Object.keys(value).reduce<Record<string, unknown>>(
        (result, key) => {
          result[toCamelCase(key)] =
            // @ts-expect-error It works
            typeof value[key as keyof typeof value] === 'object'
              ? toCamelCase(
                  // @ts-expect-error It works
                  value[key as keyof typeof value],
                  { parseDates: options?.parseDates },
                )
              : // @ts-expect-error It works
                value[key as keyof typeof value];
          return result;
        },
        {},
      ) as CamelCasedProperties<T>;

    case 'string': {
      if (!options?.parseDates || !ISO_DATE_REGEX.test(value))
        return value.replace(/_([a-z0-9])/g, (_, value) =>
          value.toUpperCase(),
        ) as CamelCasedProperties<T>;

      const date = new Date(value);
      if (!isNaN(date.getTime())) return date as CamelCasedProperties<T>;
      return value as CamelCasedProperties<T>;
    }

    default:
      return value as CamelCasedProperties<T>;
  }
}
