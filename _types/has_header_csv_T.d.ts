export type has_header_csv_T<
    ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
    ColDefs extends [string, any][]
        ? true
        : ColDefs extends any[]
            ? false
            : ColDefs extends object
                ? true
                : boolean
