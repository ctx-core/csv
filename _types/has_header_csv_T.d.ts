export type has_header_csv_T<
    ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> =
    ColDefs extends [string, unknown][]
        ? true
        : ColDefs extends unknown[]
            ? false
            : ColDefs extends object
                ? true
                : boolean
