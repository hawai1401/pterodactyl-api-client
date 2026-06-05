export const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}(?::?\d{2})?)$/;
export function toCamelCase(value, options) {
    if (value === null)
        return value;
    if (Array.isArray(value))
        return value.map((item) => toCamelCase(item, { parseDates: options?.parseDates }));
    switch (typeof value) {
        case 'object':
            return Object.keys(value).reduce((result, key) => {
                result[toCamelCase(key)] =
                    // @ts-expect-error It works
                    typeof value[key] === 'object'
                        ? toCamelCase(
                        // @ts-expect-error It works
                        value[key], { parseDates: options?.parseDates })
                        : // @ts-expect-error It works
                            value[key];
                return result;
            }, {});
        case 'string': {
            if (!options?.parseDates || !ISO_DATE_REGEX.test(value))
                return value.replace(/_([a-z0-9])/g, (_, value) => value.toUpperCase());
            const date = new Date(value);
            if (!isNaN(date.getTime()))
                return date;
            return value;
        }
        default:
            return value;
    }
}
