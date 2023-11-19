import type { csv__parse__iterator__on_row_T, csv__parse_o_T } from '../_types/index.js'

export declare function csv__parse(
    csv:string,
    csv__parse_o?:csv__parse_o_T<object>
):Iterable<string[]>
export declare function csv__parse(
    on_row:csv__parse__iterator__on_row_T,
    csv:string,
    csv__parse_o?:csv__parse_o_T<object>
):void
export declare function csv__parse_o_<
    D extends object
>():csv__parse_o_T<D>
export declare function csv__parse_o__lex_regexp_(
    delimiter?:string
):RegExp
export declare function csv__parse_o__new_line_regexp_():RegExp
